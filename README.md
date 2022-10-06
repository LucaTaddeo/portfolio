# My Portfolio
![Website](https://img.shields.io/website?down_message=down&up_message=online&url=https%3A%2F%2Flucataddeo.com)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/LucaTaddeo/portfolio?filename=src%2Fpackage.json)
![GitHub](https://img.shields.io/github/license/LucaTaddeo/portfolio)


Hello there, Luca here! 

You found the repository for my personal portfolio! It contains a nice summary about my life experiences, my projects and my education. 

To see the hosted portfolio, you can visit me at [lucataddeo.com](https://lucataddeo.com)

## Technologies and Libraries
This project is mainly developed using [React.js](https://reactjs.org). The UI Library implemented is Junior Garcia's [NextUI](https://nextui.org). In addition, following libraries are also used: 

- [Babel](https://babeljs.io) as JavaScript compiler
- [React Router](https://reactrouter.com/en/main) for routing
- [use-dark-mode](https://github.com/donavon/use-dark-mode) to handle dark and light mode theming

### Deployment
The deployment of the portfolio is handled using GitHub Actions. The website is deployed using GitHub Pages. Every commit to the main branch, that contains "[Deploy]" in the message, will trigger the CI/CD pipeline and deploy the updated website on GitHub Pages. Alternatively, 
