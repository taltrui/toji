import { useState, useEffect, useCallback } from "react";

function useParams<T extends readonly string[]>(
  keys: T
): Record<T[number], string | null> {
  const getParams = useCallback((keys: T) => {
    const searchParams = new URLSearchParams(window.location.search);
    const keysObject = {} as Record<T[number], string | null>;
    keys.forEach((key) => {
      keysObject[key as T[number]] = searchParams.get(key);
    });

    return keysObject;
  }, []);

  const [params, setParams] = useState<Record<T[number], string | null>>(
    getParams(keys)
  );

  useEffect(() => {
    const handlePopState = () => {
      setParams(getParams(keys));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [getParams, keys]);

  return params;
}

export default useParams;
