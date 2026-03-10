import { QRCodeCanvas } from "qrcode.react";

const PriceListingQR = () => {
  const url = "https://mytlounge.vercel.app/"; 
  // if local testing you can use: http://localhost:5173/price-listing

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Scan to View Price List</h2>

      <QRCodeCanvas
        value={url}
        size={200}
        bgColor="#ffffff"
        fgColor="#0f172a"
        level="H"
      />

      <p className="text-sm text-gray-500">
        Scan with your phone camera
      </p>
    </div>
  );
};

export default PriceListingQR;