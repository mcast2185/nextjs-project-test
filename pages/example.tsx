import type { NextPage } from 'next';
import React, { useState } from 'react';

interface Props {
  vendor?: any
}

const Page: NextPage<Props> = ({vendor}) => {
  const [changeColor, setColor] = useState(0);
  
  
  return (
    <div>
      <h1 className="title"
        onClick={()=> {
          changeColor < 3 ? setColor(5) : setColor(0)
        }}
      > 
        <span>{vendor}</span>News
        <style jsx>
          {`
            .title {
              color: ${changeColor > 3 ? 'red' : 'blue'};
            }
          `}
        </style>
      </h1>
      
    </div>
  )
}

Page.getInitialProps = async ({req}) => {
  const vendor = req ? req.headers.host : navigator.vendor
  return {vendor}
}
export default Page;