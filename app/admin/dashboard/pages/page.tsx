'use client'

import React, { useState } from 'react';
import { Layout } from 'antd';
import InboxPage from '@/components/Messages';
import Link from 'next/link';
// import ReactQuill from 'react-quill';
// Text editor
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

const { Content } = Layout;

const Inbox = () => {
  const [value, setValue] = useState('');
  return (
    <Layout>
      <Content style={{ padding: '50px', background: '#fff' }}>
        <h1>Pages</h1>
        <ul className='flex gap-1'>
          <li><Link href={"/admin/dashboard/pages/home"}>Home</Link></li>
          <li><Link href={"/admin/dashboard/pages/about"}>About</Link></li>
          <li><Link href={"/admin/dashboard/pages/services"}>Services</Link></li>
        </ul>
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
        <FroalaEditorComponent tag="textarea" />
      </Content>
    </Layout>
  );
};

export default Inbox;