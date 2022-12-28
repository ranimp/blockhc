import { Fragment, useState } from 'react';
import Image from 'next/image';

const Sidebar = ({bukti, onClickRiwayat, onClickBukti, riwayat}) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 lg:gap-2 md:my-8">
        <h4 className="uppercase text-slate-400 text-sm lg:text-lg font-medium">menu</h4>
        <button className={"flex gap-2 p-4 justify-center md:justify-start  items-center text-xs lg:text-base capitalize" + (riwayat ? " bg-medium-blue text-white rounded-lg" : "")} onClick={onClickRiwayat}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <p className="hidden md:block">riwayat konsultasi</p>
        </button>
        <button className={"flex gap-2 p-4 justify-center md:justify-start items-center text-xs lg:text-base capitalize" + (bukti ? " bg-medium-blue text-white rounded-lg" : "")} onClick={onClickBukti}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
          </svg>
          <p className="hidden md:block">bukti pendaftaran</p>
        </button>
      </div>
    </Fragment>
  )
}

export default Sidebar;