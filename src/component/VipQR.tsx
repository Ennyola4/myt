import { QRCodeCanvas } from "qrcode.react";

const VipQR = () => {
  const vipUrl = "https://mytvip.vercel.app/";

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-yellow-400">
        VIP Menu QR
      </h2>

      <QRCodeCanvas
        value={vipUrl}
        size={220}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
      />

      <p className="text-sm text-gray-500">
        Scan for VIP Menu
      </p>
    </div>
  );
};

export default VipQR;