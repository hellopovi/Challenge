angular.module('nordeaApp.services', [])
    .factory('applicationsService', ['$cacheFactory', function($cacheFactory) {
        var service = {};

        // list of applications available for this "phone"
        var appStoreApplications = [
            {"id": 0, "name": "pinterest", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Pinterest is a visual bookmarking tool that helps you discover and save creative ideas. Use Pinterest to make meals, plan travel, do home improvement projects and more."},
            {"id": 1, "name": "dropbox", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Dropbox lets you bring all your photos, docs, and videos anywhere and share them easily. Access any file you save to your Dropbox from all your computers, iPhone, iPad, and the web."},
            {"id": 2, "name": "whatsapp", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "WhatsApp Messenger is a smartphone messenger available for iPhone and other smartphones. WhatsApp uses your 3G or WiFi (when available) to message with friends and family. "},
            {"id": 3, "name": "viber", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "With Viber, everyone in the world can connect. Freely. More than 460 million Viber users text, make HD-quality phone and video calls, and send photo and video messages worldwide over WiFi or 3G - for free. "},
            {"id": 4, "name": "feedly", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Millions of professionals and enthusiasts use feedly every day on their iPhone or iPad to connect to the blogs, magazines and newspapers that matter to them. "},
            {"id": 5, "name": "facebook", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Keeping up with friends is faster than ever.• See what friends are up to • Share updates, photos and videos • Get notified when friends like and comment on your posts. Facebook is only available for users age 13 and over."},
            {"id": 6, "name": "gmail", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Get the official Gmail app for your iPhone or iPad. The newly redesigned app brings the best of Gmail with real-time notifications, multiple account support."},
            {"id": 7, "name": "appstore", "type": "default", "price": "free", "url": "/appStore", "installed":"false", "description": "All iOS devices—the iPhone, iPod touch, and iPad—come pre-loaded with a number of apps from Apple. Among the most popular of these apps are the App Store."},
            {"id": 8, "name": "skype", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Say “hello” to the new Skype for iPhone.Remastered to put your conversations with the people who matter most at your fingertips."},
            {"id": 9, "name": "spotify", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Spotify is the best way to listen to music on mobile or tablet.Search for any track, artist or album and listen for free. Make and share playlists. No commitment - cancel any time you like."},
            {"id": 10, "name": "youtube", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Get the official YouTube app for iPhone and iPad. Catch up with your favorite channels, enjoy the world’s largest music collection, and share easily with friends."},
            {"id": 11, "name": "chrome", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Browse fast on your iPhone and iPad with the Google Chrome browser you love on desktop. Pick up where you left off on your other devices, search by voice, and save up to 50% of data usage."},
            {"id": 12, "name": "maps", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "The Google Maps app for iPhone and iPad makes navigating your world faster and easier. Find the best spots in town and the information you need to get there."},
            {"id": 13, "name": "keep", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Quickly capture what's on your mind and share those thoughts with friends and family. Speak a voice memo on the go and have it automatically transcribed. Grab a photo of a poster, receipt or document and easily find it later in search."},
            {"id": 14, "name": "sms", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Quickly capture what's on your mind and share those thoughts with friends and family. Speak a voice memo on the go and have it automatically transcribed. Grab a photo of a poster, receipt or document and easily find it later in search."},
            {"id": 15, "name": "camera", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Quickly capture what's on your mind and share those thoughts with friends and family. Speak a voice memo on the go and have it automatically transcribed. Grab a photo of a poster, receipt or document and easily find it later in search."},
            {"id": 16, "name": "calc", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Quickly capture what's on your mind and share those thoughts with friends and family. Speak a voice memo on the go and have it automatically transcribed. Grab a photo of a poster, receipt or document and easily find it later in search."},
            {"id": 17, "name": "dribbble", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Quickly capture what's on your mind and share those thoughts with friends and family. Speak a voice memo on the go and have it automatically transcribed. Grab a photo of a poster, receipt or document and easily find it later in search."},
            {"id": 18, "name": "evernote", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Quickly capture what's on your mind and share those thoughts with friends and family. Speak a voice memo on the go and have it automatically transcribed. Grab a photo of a poster, receipt or document and easily find it later in search."},
            {"id": 19, "name": "flickr", "type": "deletable", "price": "free", "url": "/", "installed":"false", "description": "Access and organize your photos from anywhere.- Upload and access your photos from anywhere in their original quality- Backup all your photos on Flickr, not just your favorites, with 1000 GB of free storage."},
        ];

        // installing default applications
        if(typeof($cacheFactory.get('installedApplications')) == "undefined" ){
            var cache = $cacheFactory('installedApplications');
            cache.put('0', '0');
            cache.put('5', '5');
            cache.put('6', '6');
            cache.put('7', '7');
            cache.put('8', '8');
            cache.put('9', '9');
            cache.put('10', '10');
            cache.put('11', '11');
        }

        // cache source where we get installed applications
        var installedApplicationsCache = $cacheFactory.get('installedApplications');

        // function to get array of installed applications
        service.getInstalledApplications = function(){
            var installedApplicationsArray = [];
            var installedApplicationId;
            var installedApplicationObject;
            var numberOfAvailableApplications = appStoreApplications.length-1;
            for (var i = numberOfAvailableApplications; i >= 0; i--) {
                installedApplicationId = installedApplicationsCache.get(i);
                if(typeof(installedApplicationId) != "undefined"){
                    installedApplicationObject = appStoreApplications[installedApplicationId];
                    installedApplicationsArray.push(installedApplicationObject);
                }
            };
            return installedApplicationsArray;
        };

        // function to get array of available applications
        service.getAvailableToInstallApplications = function(){
            var installedApplicationId;
            var installedApplicationObject;
            var availableToInstallApplications = appStoreApplications.slice();
            var numberOfAvailableApplications = availableToInstallApplications.length-1;
            for (var i = numberOfAvailableApplications; i >= 0; i--) {
                installedApplicationId = installedApplicationsCache.get(i);
                if(installedApplicationId){
                    availableToInstallApplications[installedApplicationId].installed = true;
                } 
                if(!installedApplicationId) {
                    availableToInstallApplications[i].installed = false;
                }
            };
            return availableToInstallApplications;
        };
        
        // function to install application
        service.installApplication = function(appId){
            installedApplicationsCache.put(appId, appId);
        };

        // function to install application
        service.deleteApplication = function(appId){
            installedApplicationsCache.remove(appId);
        };

        return service;
    }
]);