'use client'

import React, { useState } from 'react';
import { Layout } from 'antd';
import InboxPage from '@/components/Messages';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import ReactQuill from 'react-quill';
// Text editor
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

const { Content } = Layout;

const Inbox = () => {
  const [editorContent, setEditorContent] = useState();
  const [editorTitle, setEditorTitle] = useState();
  const handleModuleChange = (content:any) => {
    setEditorContent(content);
  }

  
  return (
    <Layout>
      <Content style={{ padding: '50px', background: '#fff' }}>
        <Tabs>
          <TabList className={"flex gap-1 mb-5"}>
            <Tab className={"border rounded px-3 py-1"}>New Articles</Tab>
            <Tab className={"border rounded px-3 py-1"}>Edit articles</Tab>
          </TabList>
          <TabPanel>
            <div id='nt-create-article' className='nt-create-article nt-element'>
              <input type="text" name="article-title" id="nt-article-title" className='nt-article-title border rounded-lg mb-3 w-full py-2 px-3' placeholder='What is your article title?'/>
                <FroalaEditorComponent 
                  tag="textarea" 
                  model={editorContent}
                  onModelChange={handleModuleChange}
                />
                <button className='bun bg-green-600 rounded text-white px-5 py-2 mt-5 hover:bg-green-700' onClick={()=>{
                console.log(editorContent);
              }}>Submit</button>
            </div>
          </TabPanel>
          <TabPanel>
          <div id='nt-edit-article' className='nt-edit-article nt-element'>
              <select name="nt-article-options" id="nt-article-options" className='w-full border rounded-lg px-3 py-2 mb-3'>
                <option value="nt-article-1">Article One</option>
                <option value="nt-article-2">Article Two</option>
              </select>
              <FroalaEditorComponent 
                tag="textarea" 
                model={editorContent}
                onModelChange={handleModuleChange}
              />
              <button 
                className='bun bg-green-600 rounded text-white px-5 py-2 mt-5 hover:bg-green-700' 
                onClick={()=>{
                console.log(editorContent);
              }}>Submit</button>
            </div>
          </TabPanel>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default Inbox;