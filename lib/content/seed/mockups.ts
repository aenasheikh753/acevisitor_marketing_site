import type { Mockups } from "@/lib/types";

export const mockups: Mockups = {
  "dashboard": {
    "label": "AceVisitor site overview showing visitor counts, arrival activity and recent visitors.",
    "workspace": "Administration Console · Dallas Headquarters",
    "title": "Visitor activity",
    "live": "Live",
    "menu": [
      "Dashboard",
      "Visitors",
      "Badges",
      "Sites"
    ],
    "stats": [
      {
        "label": "On site now",
        "value": "38"
      },
      {
        "label": "Expected today",
        "value": "112"
      },
      {
        "label": "Contractors",
        "value": "17"
      }
    ],
    "chartTitle": "Arrivals today",
    "chartCaption": "07:00 – 18:00",
    "bars": [
      34,
      52,
      44,
      72,
      63,
      88,
      58,
      76,
      49,
      66,
      82,
      60
    ],
    "listTitle": "Recent visitors",
    "visitors": [
      {
        "initials": "RS",
        "name": "Robert Smith",
        "detail": "Northstar Technology",
        "status": "success",
        "statusLabel": "On site"
      },
      {
        "initials": "EM",
        "name": "Elena Marsh",
        "detail": "Vertex Logistics",
        "status": "info",
        "statusLabel": "Pre-registered"
      },
      {
        "initials": "DO",
        "name": "Daniel Okafor",
        "detail": "Halcyon Builders",
        "status": "waiting",
        "statusLabel": "Checked out"
      }
    ],
    "toast": "Host approved"
  },
  "frontDesk": {
    "label": "Front desk console listing the day’s arrivals, hosts and statuses.",
    "title": "Visitor activity · Today",
    "caption": "4 arrivals",
    "columns": [
      "Visitor",
      "Host",
      "Time",
      "Status"
    ],
    "rows": [
      {
        "initials": "RS",
        "name": "Robert Smith",
        "host": "James Wilson",
        "time": "09:42",
        "status": "success",
        "statusLabel": "On site"
      },
      {
        "initials": "EM",
        "name": "Elena Marsh",
        "host": "Priya Raman",
        "time": "11:15",
        "status": "info",
        "statusLabel": "Pre-registered"
      },
      {
        "initials": "DO",
        "name": "Daniel Okafor",
        "host": "Maria Gomez",
        "time": "08:05",
        "status": "waiting",
        "statusLabel": "Checked out"
      },
      {
        "initials": "AT",
        "name": "Aiko Tanaka",
        "host": "James Wilson",
        "time": "10:28",
        "status": "success",
        "statusLabel": "On site"
      }
    ]
  },
  "kiosk": {
    "label": "Self-service check-in kiosk next to a printed visitor badge.",
    "greeting": "Welcome. Please check in.",
    "subtitle": "Step 2 of 4 · Confirm your details",
    "actions": [
      "I have an invite",
      "Scan QR code",
      "Walk-in visitor"
    ],
    "badge": {
      "label": "Visitor",
      "name": "Robert Smith",
      "company": "Northstar Technology",
      "host": "Host: James Wilson",
      "valid": "Valid 09:42 – 18:00"
    }
  },
  "approvals": {
    "label": "Host notification with visit details and approve or decline options.",
    "eyebrow": "Visitor arrival",
    "name": "Robert Smith",
    "company": "Northstar Technology",
    "details": [
      "Dallas Headquarters · Lobby",
      "Arrived 09:42 · Meeting 10:00"
    ],
    "acknowledged": "NDA signed · Photo captured",
    "approve": "Approve",
    "decline": "Decline"
  },
  "multiSite": {
    "label": "Activity across several sites shown as a list with on-site counts.",
    "title": "Across all sites",
    "live": "Live",
    "onSiteLabel": "on site",
    "sites": [
      {
        "name": "Dallas HQ",
        "onSite": "42",
        "load": 72
      },
      {
        "name": "Austin Campus",
        "onSite": "27",
        "load": 48
      },
      {
        "name": "Denver Data Center",
        "onSite": "9",
        "load": 18
      },
      {
        "name": "Phoenix Project Site",
        "onSite": "33",
        "load": 58
      }
    ]
  }
};
