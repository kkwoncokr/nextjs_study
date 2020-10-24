import React, { useState } from 'react';
import Protypes from 'prop-types';
import Link from 'next/link';
import {Input, Menu, Row,Col} from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
    vertical-align: "middle";
`;

const AppLayout = ({children}) => {
    const { isLoggedIn } = useSelector(state => state.user);
    console.debug(isLoggedIn)
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                   <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile/> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {/* rel 보완 때문에 적음 */}
                    <a href="http://www.kkwon.co.kr" target="_blank" rel="noreferrer noopener">Made by kkwon</a>
                </Col>
            </Row>
        </div>
    );
}

AppLayout.prototype = {
    children: Protypes.node.isRequired
}

export default React.memo(AppLayout);