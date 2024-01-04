import { openKkiapayWidget } from 'kkiapay';

export const openingKkiaModal = (email: string) => {
  const url = `successRedirectUrl=${process.env.NEXT_PUBLIC_SUCCESS_URL}&failureRedirectUrl=${process.env.NEXT_PUBLIC_FAIL_URL}`;

  openKkiapayWidget({
    amount: 1,
    api_key: process.env.NEXT_PUBLIC_KKIPAY_KEY,
    email: email,

    callback: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payments/kkiapay/callback?${url}`,
    theme: '#000000',
  });
};
