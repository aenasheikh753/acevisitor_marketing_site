import type { Mockups } from "@/lib/types";

export const mockups: Mockups = {
  "dashboard": {
    "label": "AceVisitor site overview showing visitor counts, arrival activity and recent visitors.",
    "workspace": "Site overview · Dallas HQ",
    "title": "",
    "live": "Live",
    "menu": [
      "Overview",
      "Visitors",
      "Approvals",
      "Reports"
    ],
    "stats": [
      {
        "label": "On site",
        "value": "42"
      },
      {
        "label": "Expected",
        "value": "18"
      },
      {
        "label": "Pending",
        "value": "3"
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
        "initials": "AR",
        "name": "Amira Rahman",
        "detail": "Meeting · Main entrance",
        "status": "success",
        "statusLabel": "Approved"
      },
      {
        "initials": "DK",
        "name": "Daniel Kowalski",
        "detail": "Contractor · Loading dock",
        "status": "info",
        "statusLabel": "Checked in"
      },
      {
        "initials": "LM",
        "name": "Lena Morales",
        "detail": "Interview · Lobby B",
        "status": "waiting",
        "statusLabel": "Expected"
      }
    ],
    "toast": "Host approved"
  },
  "frontDesk": {
    "label": "Front desk console listing the day’s arrivals, hosts and statuses.",
    "title": "Front desk · Today",
    "caption": "4 arrivals",
    "columns": [
      "Visitor",
      "Host",
      "Time",
      "Status"
    ],
    "rows": [
      {
        "initials": "AR",
        "name": "Amira Rahman",
        "host": "James Wilson",
        "time": "09:42",
        "status": "info",
        "statusLabel": "Checked in"
      },
      {
        "initials": "RS",
        "name": "Robert Smith",
        "host": "Priya Raman",
        "time": "10:00",
        "status": "success",
        "statusLabel": "Approved"
      },
      {
        "initials": "LM",
        "name": "Lena Morales",
        "host": "Maria Gomez",
        "time": "10:30",
        "status": "waiting",
        "statusLabel": "Expected"
      },
      {
        "initials": "DK",
        "name": "Daniel Kowalski",
        "host": "Facilities",
        "time": "11:15",
        "status": "waiting",
        "statusLabel": "Expected"
      }
    ]
  },
  "kiosk": {
    "label": "Self-service check-in kiosk next to a printed visitor badge.",
    "greeting": "Welcome",
    "subtitle": "Check in for your visit",
    "actions": [
      "I have an invite",
      "Scan QR code",
      "Walk-in visitor"
    ],
    "badge": {
      "label": "Visitor",
      "name": "Amira Rahman",
      "company": "Northwind Partners",
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
      "Arrived 09:42 · Meeting 10:00",
      "Dallas HQ · Main lobby"
    ],
    "acknowledged": "Site policy acknowledged",
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
