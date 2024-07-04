import React from 'react';
import { CSVLink } from 'react-csv';

const data = [
  ['Имя', 'Отчество','Фамилия','Номер телефона','Адрес', 'email'],
  ['John', '25', 'john@example.com'],
  ['Jane', '30', 'jane@example.com'],
  ['Bob', '28', 'bob@example.com']
];

function ExportCSV() {
  return (
    <CSVLink
      data={data}
      filename="Список.csv"
      className="btn btn-primary"
      target="_blank"
    >
      Экспортировать в CSV
    </CSVLink>
  );
}

export default ExportCSV;