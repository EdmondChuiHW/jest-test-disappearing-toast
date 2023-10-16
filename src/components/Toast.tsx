import { useEffect, useState } from "react";

export default function Toast() {
  const [isHidden, setHidden] = useState(false);
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setHidden(true);
    }, 5 * 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  if (isHidden) return <></>;

  return (
    <div>We have been trying to reach out about your extended warranty</div>
  );
}
