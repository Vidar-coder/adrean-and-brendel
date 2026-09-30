/** Query key for the invitee's display name on proposal URLs. */
export const PROPOSAL_INVITEE_QUERY_KEY = "for"

export function buildProposalInvitePath(roleId: string, inviteeName?: string): string {
  const base = `/will-you-be-proposal/${encodeURIComponent(roleId)}`
  const trimmed = inviteeName?.trim()
  if (!trimmed) return base
  const params = new URLSearchParams()
  params.set(PROPOSAL_INVITEE_QUERY_KEY, trimmed)
  return `${base}?${params.toString()}`
}

export function buildProposalInviteUrl(
  origin: string,
  roleId: string,
  inviteeName?: string,
): string {
  const normalizedOrigin = origin.replace(/\/$/, "")
  return `${normalizedOrigin}${buildProposalInvitePath(roleId, inviteeName)}`
}

export function parseInviteeNameFromSearchParams(
  params: Pick<URLSearchParams, "get">,
): string {
  const raw =
    params.get(PROPOSAL_INVITEE_QUERY_KEY) ?? params.get("name") ?? params.get("invitee")
  if (!raw) return ""
  try {
    return decodeURIComponent(raw).trim()
  } catch {
    return raw.trim()
  }
}
