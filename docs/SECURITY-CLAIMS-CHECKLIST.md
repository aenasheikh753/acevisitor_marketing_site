# Security claims checklist

No security claim may be published without a named owner and evidence. A control appears on the website only when `verificationStatus` is `verified` in `content/security-controls/`.

To publish a claim:

1. Name the owner.
2. Record the evidence, such as an audit report, configuration export or test result.
3. Have the owner confirm that the public description in the CMS is accurate.
4. Set the status to `verified` and record the review date.

Review each verified claim at least once a year and whenever the product changes.

| Claim | Owner | Evidence | Status |
| --- | --- | --- | --- |
| Multi-factor authentication | Not assigned | None provided | Unverified |
| Tenant isolation | Not assigned | None provided | Unverified |
| Role-based access control | Not assigned | None provided | Unverified |
| Audit logging | Not assigned | None provided | Unverified |
| Encryption in transit | Not assigned | None provided | Unverified |
| Encryption at rest | Not assigned | None provided | Unverified |
| Data retention controls | Not assigned | None provided | Unverified |
| Backup and recovery | Not assigned | None provided | Unverified |

## Claims held back from the reference site

The earlier site made these statements. They were left out of this build until they are verified:

- "MFA enforced" and "Multi-factor authentication"
- "Immutable audit logging" and "Audit-ready records"
- "Tenant separation" and "Isolated" workspaces
- "Role-based access"
- "Data protection"
- Performance figures in mockups, such as average check-in time and sites online

## Also check

- The management console gallery image shows a multi-factor screen on a phone. See `IMAGE-REVIEW.md`.
- Compliance names such as SOC 2, ISO 27001, HIPAA or GDPR must not appear anywhere without evidence recorded here. None appear today.
