import AdSense from "react-adsense";

export const AdsenseLoading = ({ slotId }) => {
  const isProduction = process.env.NODE_ENV === "production" ? true : false;

  return (
    <>
      {isProduction ? (
        <div className="text-center">
          <AdSense.Google
            style={{ display: "block" }}
            client="ca-pub-9130836798889522"
            slot={slotId ? slotId : "8405889464"}
            format="auto"
            responsive="true"
          />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "360px",
            backgroundColor: "#2d3436",
            margin: "0 auto",
          }}
        >
          애드센스 {slotId}
        </div>
      )}
    </>
  );
};
