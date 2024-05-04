        const app = new Vue({
            el: '#app',
            data() {
                return {
                    videos: [
                        { id: 1, title: 'Video 1', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
                        { id: 2, title: 'Video 2', link: 'https://www.youtube.com/watch?v=zBnSJt-s9WE' },
                        { id: 3, title: 'Video 3', link: 'https://www.youtube.com/watch?v=kNt-a2R6UyU' },
                        { id: 4, title: 'Video 4', link: 'https://www.youtube.com/watch?v=HgzGwKwLmgM' },
                        { id: 5, title: 'Video 5', link: 'https://www.youtube.com/watch?v=5Q-KtabDYvg' },
                    ],
                };
            },
        });