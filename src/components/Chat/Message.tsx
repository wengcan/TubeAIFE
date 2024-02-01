import React from "react";

export function Message() {
    return (
        <div className="flex flex-row">
            <div className="p-2 ">
                <div className="w-[60px] rounded-full overflow-hidden">
                    <img src='https://yt3.googleusercontent.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s176-c-k-c0x00ffffff-no-rj' />
                </div>
            </div>
            <div>
                <h5 className="text-sm font-bold leading-5">Top Story with Tom Llamas - Jan. 30 | NBC News NOW</h5>
                <div className="bg-white rounded-2xl">
                    <p className="p-4 text-sm">
                        NBC News Digital is a collection of innovative and powerful news brands that deliver compelling, diverse and engaging news stories. NBC News Digital features NBCNews.com, MSNBC.com, TODAY.com, Nightly News, Meet the Press, Dateline, and the existing apps and digital extensions of these respective properties.  We deliver the best in breaking news, live video coverage, original journalism and segments from your favorite NBC News Shows.
                    </p>
                </div>
            </div>

        </div>
    )
}