"use client";

import Link from "next/link";
import { type FormEvent, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import type { FormCopy } from "@/lib/types";

type FieldName = "name" | "email" | "company" | "message";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "failure";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_ORDER: FieldName[] = ["name", "email", "company", "message"];

function validate(data: FormData, copy: FormCopy): Errors {
  const value = (key: FieldName) => String(data.get(key) ?? "").trim();
  const errors: Errors = {};
  if (!value("name")) errors.name = copy.fields.name.error;
  if (!value("email")) errors.email = copy.fields.email.error;
  else if (!EMAIL_PATTERN.test(value("email"))) errors.email = copy.fields.email.invalid;
  if (!value("company")) errors.company = copy.fields.company.error;
  if (!value("message")) errors.message = copy.fields.message.error;
  return errors;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: FieldName;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label} <span aria-hidden="true">*</span>
      </label>
      {children}
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm({ copy, privacyHref }: { copy: FormCopy; privacyHref: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const statusRef = useRef<HTMLDivElement>(null);

  const announce = (next: Status) => {
    setStatus(next);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Bots fill the hidden field: report success and send nothing.
    if (String(data.get("website") ?? "")) {
      form.reset();
      announce("success");
      return;
    }

    const found = validate(data, copy);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      announce("failure");
      return;
    }

    setStatus("submitting");
    data.delete("website");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
      form.reset();
      announce("success");
    } catch {
      announce("failure");
    }
  };

  const inputProps = (name: FieldName) => ({
    id: name,
    name,
    required: true,
    "aria-required": true as const,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: "field-input",
  });

  const fields = copy.fields;

  return (
    <form
      noValidate
      className="card p-6 sm:p-8"
      onSubmit={onSubmit}
      onInput={(event) => {
        const name = (event.target as HTMLInputElement).name as FieldName;
        if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
      }}
    >
      <div ref={statusRef} tabIndex={-1} className="outline-none" role={status === "failure" ? "alert" : "status"}>
        {status === "success" ? (
          <div className="mb-6 rounded-button bg-success-soft p-4 text-success">
            <p className="font-bold">{copy.success.title}</p>
            <p className="mt-1 text-sm">{copy.success.description}</p>
          </div>
        ) : null}
        {status === "failure" ? (
          <div className="mb-6 rounded-button bg-danger-soft p-4 text-danger">
            <p className="font-bold">{copy.failure.title}</p>
            <p className="mt-1 text-sm">{copy.failure.description}</p>
          </div>
        ) : null}
      </div>

      {Object.values(errors).some(Boolean) ? (
        <p role="alert" className="mb-5 text-sm font-bold text-danger">
          {copy.errorSummary}
        </p>
      ) : null}

      <p className="mb-5 text-sm text-muted">{copy.requiredHint}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={fields.name.label} error={errors.name}>
          <input {...inputProps("name")} type="text" autoComplete="name" placeholder={fields.name.placeholder} />
        </Field>
        <Field id="email" label={fields.email.label} error={errors.email}>
          <input {...inputProps("email")} type="email" autoComplete="email" placeholder={fields.email.placeholder} />
        </Field>
        <Field id="company" label={fields.company.label} error={errors.company}>
          <input
            {...inputProps("company")}
            type="text"
            autoComplete="organization"
            placeholder={fields.company.placeholder}
          />
        </Field>
        <div>
          <label className="field-label" htmlFor="interest">
            {fields.interest.label}
          </label>
          <select id="interest" name="interest" className="field-input">
            {fields.interest.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Field id="message" label={fields.message.label} error={errors.message}>
            <textarea {...inputProps("message")} rows={5} placeholder={fields.message.placeholder} />
          </Field>
        </div>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">{fields.honeypot.label}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? copy.submitting : copy.submit}
        </Button>
        <Link href={privacyHref} className="text-link text-sm">
          {copy.privacyNote}
        </Link>
      </div>
    </form>
  );
}
