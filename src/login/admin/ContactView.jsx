import axios from 'axios'
import React, { useState } from 'react'
import { getConfig } from '../../env_config/activeConfig';
import LoginWelcome from '../utils/LoginWelcome';
import toast from 'react-hot-toast';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function ContactView() {
    const [apiData, setApiData] = useState(null);
    const navigate = useNavigate(); 
    const callBackendAPI = () => {
        const config = getConfig();
        axios.get(config.contact_endpoint)
            .then((res) => {
                toast.success("Successfully fetched!");
                setApiData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                // Handle error here
            });
    };

    const columns = [
        {
            title: 'Date & Time',
            dataIndex: 'timestamp',
            key: 'timestamp',
            sorter: (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
            render: (text, record) => {
                const date = new Date(record.timestamp);
                return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => `${record.firstname} ${record.lastname}`,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                  <Input
                    placeholder="Search name"
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => confirm()}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                  />
                  <Space>
                    <Button
                      type="primary"
                      onClick={() => confirm()}
                      icon={<SearchOutlined />}
                      size="small"
                      style={{ width: 90, backgroundColor:'dodgerblue'}}
                    >
                      Search
                    </Button>
                    <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                      Reset
                    </Button>
                  </Space>
                </div>
              ),
              onFilter: (value, record) => {
                const fullName = `${record.firstname} ${record.lastname}`.toLowerCase();
                return fullName.includes(value.toLowerCase());
              },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
    ];
  let data = JSON.parse(localStorage.getItem("syfLoggedInUser"));
  if(null != data){
    return (
    <>
        <LoginWelcome/>
        <Table dataSource={apiData} columns={columns} scroll={{ x: true }} footer={() => `Total ${apiData ? apiData.length : 0} records`}/>
        <center><button onClick={callBackendAPI} className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Fetch Data</button></center>
        
    </>
      )
  }
  else{
    navigate("/login");
  }
  
}

export default ContactView;
