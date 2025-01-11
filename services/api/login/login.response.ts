export type LOGIN_DATA_RESPONSE = Readonly<{
  data: {
    token: string;
    email: string;
    first_name: string;
    last_name: string;
    mobile: string | null;
    mobile_verified_at: string | null;
    mobile_verification_code_sent_at: string | null;
  };
}>;
