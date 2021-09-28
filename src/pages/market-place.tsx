import * as React from 'react';

import { Button, Header } from 'src/components';

export default function MarketPalcePage() {
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    const handlScrollY = () => {
      const value = window.scrollY;
      if (value > 0 && isScroll === false) {
        setIsScroll(true);
      } else if (value === 0) {
        setIsScroll(false);
      }
    };
    handlScrollY();

    window.addEventListener('scroll', handlScrollY);
    return () => {
      window.removeEventListener('scroll', handlScrollY);
    };
  });
  return (
    <div>
      <Header isScroll={isScroll} />

      <div className="flex flex-col items-center py-24 gap-y-5 bg-mainLayout">
        <div className="flex flex-col w-full p-6 bg-white shadow-xl md:max-w-[460px] rounded-[30px] gap-y-6">
          <div className="relative flex flex-col gap-y-[10px]">
            <div className="flex flex-col p-4 border bg-opacity-50 border-opacity-30 active:border-greyser hover:border-greyser bg-solitude rounded-[20px]">
              <div className="flex items-center">
                <div className="items-center flex-1">
                  <div className="text-base opacity-60">Swap from</div>
                  <input
                    aria-label="Currency"
                    className="w-full text-[20px] font-medium bg-transparent focus:outline-none"
                    placeholder="0.0"
                    size={1}
                  />
                </div>
                <div>LOGO</div>
              </div>
            </div>
            <div className="flex flex-col p-4 border bg-opacity-50 border-opacity-30 active:border-greyser hover:border-greyser bg-solitude rounded-[20px]">
              <div className="flex items-center">
                <div className="items-center flex-1">
                  <div className="text-base opacity-60">Swap to</div>
                  <input
                    aria-label="Currency"
                    className="w-full text-[20px] font-medium bg-transparent focus:outline-none"
                    placeholder="0.0"
                    size={1}
                  />
                </div>
                <div>LOGO</div>
              </div>
            </div>
          </div>

          <Button className="py-4 rounded-[14px]" color="primary" size="lg">
            Submit
          </Button>
        </div>

        <div className="flex flex-col w-full p-6 bg-white shadow-xl md:max-w-[460px] rounded-[30px]">
          <div className="flex justify-between text-center">
            <div className="gap-y-[10px]">
              <div className="opacity-60">Total MIN tokens</div>
              <div className="text-2xl font-medium">1.6M</div>
              <div className="text-primaryMain">ADA 500k</div>
            </div>
            <div className="gap-y-[10px]">
              <div className="opacity-60">Total MIN sold</div>
              <div className="text-2xl font-medium">800k</div>
              <div className="text-primaryMain">ADA 250k</div>
            </div>
            <div className="gap-y-[10px]">
              <div className="opacity-60">Total MIN order</div>
              <div className="text-2xl font-medium">200k</div>
              <div className="text-primaryMain">ADA 100k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
