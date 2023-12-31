chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url) {
        // Specific query 
        if(tab.url.match(/testudo\.umd\.edu\/soc\/(?:gen-ed\/|core\/)?search/)) {
            const queryParams = tab.url.split("?")[1];
            const urlParams = new URLSearchParams(queryParams);
            urlParams.type = "query";

            chrome.tabs.sendMessage(tabId, urlParams);
            /*
            https://app.testudo.umd.edu/soc/search?
                courseId=
                &sectionId=
                &termId=202401
                &_openSectionsOnly=on
                &creditCompare=
                &credits=
                &courseLevelFilter=ALL&instructor=
                &_facetoface=on
                &_blended=on
                &_online=on
                &courseStartCompare=
                &courseStartHour=
                &courseStartMin=
                &courseStartAM=
                &courseEndHour=
                &courseEndMin=
                &courseEndAM=
                &teachingCenter=ALL
                &_classDay1=on
                &_classDay2=on
                &_classDay3=on
                &_classDay4=on
                &_classDay5=on
            */

        /* All Courses   - https://app.testudo.umd.edu/soc/202401/AASP         (<semester>/<prefix>)
         * GenEd Courses - https://app.testudo.umd.edu/soc/gen-ed/202401/FSAW  ("gen-ed"/<semester>/<gen-ed type>)
         * Core Courses  - https://app.testudo.umd.edu/soc/core/202401/IE      ("core"/<semester>/<core type>)
         */

        // Browsing gen-eds
        } else if(tab.url.match(/testudo\.umd\.edu\/soc\/gen-ed\/(\d{6})\/([A-Z]{4})$/)) {

        // Browsing core courses
        } else if(tab.url.match(/testudo\.umd\.edu\/soc\/core\/(\d{6})\/([A-Z]{1,2})$/)) {

        // Browsing all courses
        } else if(tab.url.match(/testudo\.umd\.edu\/soc\/(\d{6})\/([A-Z]{4})$/))
    }
});