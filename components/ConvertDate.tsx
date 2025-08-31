type ConvertDateProps = {
  dateISO: string; // "2025-08-31T12:34:56.000Z" みたいな文字列
};

import { parseISO, format } from "date-fns";
import { ja } from "date-fns/locale/ja";

export default function ConvertDate({ dateISO }: ConvertDateProps) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy.MM.dd", { locale: ja })}
    </time>
  );
}
