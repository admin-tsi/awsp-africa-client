"use strict";
import { openKkiapayWidget } from 'kkiapay';

export const openingKkiaModal = (email: string, callback: string) => {
    // Ensures this runs only in the browser
    openKkiapayWidget({
      amount: 1,
      api_key: process.env.NEXT_PUBLIC_KKIPAY_KEY,
      email: email,
      callback: `${callback}`,
      theme: '#000000'
    });
};
