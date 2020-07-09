import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

export type TableDataItem = {
  [k in string | number]: any;
};

export interface TableColumn {
  key: string;
  title?: string;
  dataIndex?: string;
  width?: number;
  render?: (v: any, row: TableDataItem) => any;
  fixed?: 'left' | 'right'
}

export interface TableProps {
  data: Array<TableDataItem>;
  columns: Array<TableColumn>
}

const Table: React.FC<TableProps> = props => {
  const { data, columns } = props;
  return <div className='f-table-container'>
    <table className='f-table'>
      <colgroup>
        {
          columns.map((col, index) => {
            const { width = 'auto' } = col;
            return <col key={index} style={{ width, minWidth: width }} />;
          })
        }
      </colgroup>
      <thead className='f-table-thead'>
        <tr className='f-table-tr'>
          {
            columns.map(col => {
              const { fixed, title, key } = col;
              return <th
                className={classNames('f-table-th', {
                  [`fixed-${fixed}`]: fixed
                })}
                key={key}
              >{title}</th>;
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
                  const { key, dataIndex = '', fixed } = col;
                  const renderValue = dataItem[dataIndex];
                  return <td className={classNames('f-table-td', {
                    [`fixed-${col.fixed}`]: fixed
                  })} key={key}>
                    {
                      col.render === undefined ?
                        renderValue :
                        col.render(renderValue, dataItem)
                    }
                  </td>;
                })
              }
            </tr>;
          })
        }
      </tbody>
    </table>
  </div>;
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
      render: PropTypes.func.isRequired,
      width: PropTypes.number.isRequired,
      fixed: PropTypes.oneOf<'left' | 'right'>(['left', 'right']).isRequired
    }).isRequired
  ).isRequired
};

export default Table;
