import { useState } from "react";

function useCurrencyFormat(initialValue = 0) {
  const [value, setValue] = useState(initialValue);

  const formatToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const setValueAndFormat = (newValue) => {
    setValue(newValue);
  };

  const formattedValue = formatToRupiah(value);

  return { value, formattedValue, setValueAndFormat };
}

export default useCurrencyFormat;