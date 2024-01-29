import { openKkiapayWidget } from 'kkiapay';

export const openingKkiaModal = (email: string, callback: string) => {
  if (typeof window === "undefined") {
    // Not in the browser, skip or handle accordingly
    return;
  }

  openKkiapayWidget({
    amount: 1,
    api_key: process.env.NEXT_PUBLIC_KKIPAY_KEY,
    email: email,
    callback: `${callback}`,
    theme: '#000000'
  });
};
