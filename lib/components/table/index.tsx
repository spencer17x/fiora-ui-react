import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export type TableDataItem = {
  [k in string | number]: any;
};

export interface TableColumn {
  key: string;
  title?: string;
  dataIndex?: string;
  render?: (v: any) => any;
}

export interface TableProps {
  data: Array<TableDataItem>;
  columns: Array<TableColumn>
}

const Table: React.FC<TableProps> = props => {
  const { data, columns } = props;
  return <table className='f-table'>
    <thead className='f-table-thead'>
      <tr className='f-table-tr'>
        {
          columns.map(col => {
            return <th className='f-table-th' key={col.key}>{col.title}</th>;
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        data.map(dataItem => {
          return <tr className='f-table-tr' key={dataItem.key}>
            {
              columns.map(col => {
                const { key, dataIndex = '' } = col;
                return <td className='f-table-td' key={key}>
                  {
                    col.render === undefined ?
                      dataItem[dataIndex] :
                      col.render(dataItem[dataIndex])
                  }
                </td>;
              })
            }
          </tr>;
        })
      }
    </tbody>
  </table>;
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired
    }).isRequired
  ).isRequired
};

export default Table;