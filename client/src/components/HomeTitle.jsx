import React, { useState, useEffect, useContext } from "react";

export default function HomeTitle() {
  return (
    <div className='flex flex-col col-span-4 items-center justify-center'>
      <h1 className='text-3xl font-bold'>
        b<span className='underline'>log-gol</span>d
      </h1>
      <p className='p-5 max-w-lg'>
        I want to write articles about the mental/emotional aspects of learning
        tech so far. I will also include some technical posts.
      </p>
    </div>
  );
}
