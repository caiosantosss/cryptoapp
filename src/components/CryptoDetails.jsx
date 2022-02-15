import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFeching } = useGetCryptoDetailsQuery(coinId);

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];



  console.log(data);

  return (
    <div>
      CryptoDetails {coinId}
    </div>
  )
}

export default CryptoDetails
