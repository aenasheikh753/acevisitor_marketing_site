import type {
  Feature,
  GalleryItem,
  Industry,
  PublicSecurityControl,
  SecurityControl,
} from "@/lib/types";
import { bySortOrder, readJsonCollection } from "./read";

export function getFeatures(kind: Feature["kind"]): Feature[] {
  return bySortOrder(readJsonCollection<Feature>("features").filter((item) => item.kind === kind));
}

export function getIndustries(): Industry[] {
  return bySortOrder(readJsonCollection<Industry>("industries"));
}

export function getGalleryItems(): GalleryItem[] {
  return bySortOrder(readJsonCollection<GalleryItem>("gallery"));
}

/**
 * Returns only verified controls, and only their public fields, so owner,
 * reviewDate and verificationStatus can never reach the page or its payload.
 */
export function getVerifiedSecurityControls(): PublicSecurityControl[] {
  return bySortOrder(readJsonCollection<SecurityControl>("security-controls"))
    .filter((control) => control.verificationStatus === "verified")
    .map(({ slug, name, description, icon }) => ({ slug, name, description, icon }));
}
