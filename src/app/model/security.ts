export class Security {
  ticker: string;
  name: string;
  sector: string;
  industry: string;

  constructor(securityDoc: any) {
    this.ticker = securityDoc.ticker;
    this.name = securityDoc.security;
    this.sector = securityDoc.sector;
    this.industry = securityDoc.industry;
  }
}
