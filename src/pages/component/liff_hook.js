import { useState, useEffect } from "react";
import { liff } from "./lib/liff";

function useLiff({ liffId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  const initLiff = async ({ liffId }) => {
    setLoading(true);
    try {
      await liff.init({ liffId });
      // console.log("success liff init");
    } catch (error) {
      // console.log({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const userProfile = await liff.getProfile();
      setProfile(userProfile);
      // console.log(userProfile);
    } catch (error) {
      // console.log({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async ({ text }) => {
    setLoading(true);
    try {
      liff.sendMessages([{ type: "text", text }]);
      // console.log(`success send message: ${text}`);
    } catch (error) {
      // console.log({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const closeLiff = () => {
    liff.closeWindow();
  };

  useEffect(() => {
    const liffId = "1654260546-VwqZxy4o";
    if (liffId) {
      // console.log(liffId);
      initLiff({ liffId });
      liff.ready.then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          fetchProfile();
        }
      });
    }

    // prepare liff
  }, [liffId]);

  return {
    loading,
    error,
    sendMessage,
    closeLiff,
    profile,
  };
}

export default useLiff;
