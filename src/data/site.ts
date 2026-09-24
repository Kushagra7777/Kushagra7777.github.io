// Public contact details supplied by Kushagra. Edit here to update all CTAs.
export const EMAIL = "srivastavkushagra777@gmail.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/kushagra-srivastav-75825b214/";
export const GITHUB_URL = "https://github.com/Kushagra7777";
export const emailConfigured = EMAIL.includes("@");
const body =
  "Hi Kushagra,\n\nModel:\nGPU:\nServing stack:\nCurrent latency/throughput:\nMain problem:\nTarget:\n";
export const inquiryHref = `mailto:${EMAIL}?subject=${encodeURIComponent("LLM Inference Optimization Inquiry")}&body=${encodeURIComponent(body)}`;
export const auditHref = `mailto:${EMAIL}?subject=${encodeURIComponent("GPU / LLM Performance Audit")}&body=${encodeURIComponent(body)}`;
