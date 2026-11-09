"use client";

import Link from "next/link";
import { type FormEvent, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import type { FormCopy, FormField } from "@/lib/types";

type Errors = Record<string, string | undefined>;
type Status = "idle" | "submitting" | "success" | "failure";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HONEYPOT = "website";

function validate(data: FormData, fields: FormField[]): Errors {
  const errors: Errors = {};
  for (const field of fields) {
    const value = String(data.get(field.name) ?? "").trim();
    if (field.required && !value) errors[field.name] = field.error;
    else if (field.type === "email" && value && !EMAIL_PATTERN.test(value)) errors[field.name] = field.invalid ?? field.error;
  }
  return errors;
}

function Control({ field, error }: { field: FormField; error?: string }) {
  const shared = {
    id: field.name,
    name: field.name,
    required: field.required,
    "aria-required": field.required,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? `${field.name}-error` : undefined,
    autoComplete: field.autoComplete,
    className: "field-input",
  };
  if (field.type === "textarea") return <textarea {...shared} rows={5} placeholder={field.placeholder} />;
  if (field.type === "select") {
    return (
      <select {...shared} defaultValue="">
        <option value="" disabled={field.required}>
          {field.placeholder}
        </option>
        {field.options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    );
  }
  return <input {...shared} type={field.type} placeholder={field.placeholder} />;
}

export default function ContactForm({ formName, copy }: { formName: string; copy: FormCopy }) {
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
    if (String(data.get(HONEYPOT) ?? "")) {
      form.reset();
      announce("success");
      return;
    }

    const found = validate(data, copy.fields);
    setErrors(found);
    const firstInvalid = copy.fields.find((field) => found[field.name]);
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(firstInvalid.name)?.focus();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      announce("failure");
      return;
    }

    setStatus("submitting");
    data.delete(HONEYPOT);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ form: formName, ...Object.fromEntries(data) }),
      });
      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
      form.reset();
      announce("success");
    } catch {
      announce("failure");
    }
  };

  return (
    <form
      noValidate
      className="card p-6 sm:p-8"
      onSubmit={onSubmit}
      onInput={(event) => {
        const name = (event.target as HTMLInputElement).name;
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
        {copy.fields.map((field) => (
          <div key={field.name} className={field.width === "half" ? "" : "sm:col-span-2"}>
            <label className="field-label" htmlFor={field.name}>
              {field.label} {field.required ? <span aria-hidden="true">*</span> : null}
            </label>
            <Control field={field} error={errors[field.name]} />
            {errors[field.name] ? (
              <p className="field-error" id={`${field.name}-error`}>
                {errors[field.name]}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor={HONEYPOT}>{copy.honeypotLabel}</label>
        <input id={HONEYPOT} name={HONEYPOT} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {copy.note ? <p className="mt-5 text-sm text-muted">{copy.note}</p> : null}

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? copy.submitting : copy.submit}
        </Button>
        <Link href={copy.privacyHref} className="text-link text-sm">
          {copy.privacyNote}
        </Link>
      </div>
    </form>
  );
}
