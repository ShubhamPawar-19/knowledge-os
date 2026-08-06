export function documentRoute(
  documentId: string,
  pageNumber?: number,
) {
  const base =
    `/dashboard/documents/${documentId}`;

  if (!pageNumber) {
    return base;
  }

  return `${base}?page=${pageNumber}`;
}