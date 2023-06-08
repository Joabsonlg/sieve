## Web Scraping Framework

#### The Web Scraping Framework is a base and extensible application aimed at extracting data from web pages. It provides a flexible and easy-to-use structure for efficiently and effectively performing web scraping tasks.

### Framework Structure:

- sieve/
    - src/
        - core/
            - index.js
        - modules/
            - extraction.js
            - navigation.js
            - dataPersistence.js
        - utils/
            - helper.js
        - robots/
            - myApplication.js
    - index.js


- The 'core' folder contains the 'index.js' file, which is responsible for initializing and managing the framework.
- The 'modules' folder contains the framework modules such as 'extraction.js', 'navigation.js', and '
  dataPersistence.js', which provide specific functionalities for web scraping.
- The 'utils' folder contains the 'helper.js' file, which contains helper functions used in the framework.
- The 'robots' folder contains the applications that use the framework and define custom steps for data extraction.

If you encounter any issues or have suggestions for improvements to the Web Scraping Framework, feel free to open a new
issue on the GitHub repository: https://github.com/Joabsonlg/sieve/issues
