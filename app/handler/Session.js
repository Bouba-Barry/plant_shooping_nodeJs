class Session {
  constructor(email, expiresAt) {
    this.email = email;
    this.expiresAt = expiresAt;
  }

  isExpired() {
    this.expiresAt < new Date();
  }
}
