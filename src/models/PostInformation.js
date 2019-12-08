class PostInfo {
  constructor(loc, act, status) {
    this.location = loc
    this.action = { subject: act.subject, predicate: act.prediate }
    this.status = status
  }
}
