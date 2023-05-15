# enigma1
# Ethereum Copyright Storage and Web Crawler

This project combines Ethereum-based copyright storage with a web crawler that utilizes Puppeteer, regex, depth-first search (DFS), and optical character recognition (OCR) to identify and flag websites that infringe upon copyrights. This Readme provides an overview of the project, installation instructions, usage guidelines, and other relevant information.

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)

## Project Overview
The goal of this project is to create a decentralized copyright storage system using the Ethereum blockchain. It allows users to store copyright information securely and immutably. Additionally, the project includes a web crawler that scans websites for potential copyright infringement using various techniques such as Puppeteer, regex pattern matching, DFS, and OCR.

The main components of the project are as follows:
- **Ethereum Contract**: Contains the smart contract code that enables copyright storage on the Ethereum blockchain.
- **Web Crawler**: Utilizes Puppeteer, a Node.js library, to crawl websites and analyze their content for potential copyright infringement. It uses regex pattern matching to identify copyright-related keywords and OCR to analyze images containing copyrighted content.
- **Flagging Mechanism**: When the web crawler identifies potential copyright infringement, it flags the respective websites and generates a report for further analysis.

## Installation
To install and set up the project, follow these steps:

1. Clone the project repository from GitHub:
```git clone <repository-url>```

2. Navigate to the project directory:
```cd enigma1```

3. Install the required dependencies:
```npm install```

4. Configure the Ethereum network:
- Connect to an Ethereum network or set up a local development network using tools like Ganache or Truffle.
- Update the Ethereum network configuration in the project files as necessary.

5. Set up the web crawler environment:
- Install Puppeteer:
  ```
  npm install puppeteer
  ```
- Install any additional dependencies required for OCR, such as Tesseract.js.

6. Configure the web crawler:
- Update the crawler settings in the project files, such as the starting URLs, crawling depth, and OCR configuration.

## Usage
To use the project, follow these steps:

1. Start the Ethereum network or connect to the desired network where the copyright storage contract is deployed.

2. Deploy the copyright storage smart contract to the Ethereum network:
- Compile and deploy the contract using Truffle or your preferred Ethereum development framework.
- Configure the contract address and ABI in the project files.

3. Launch the web crawler:
```node crawler.js```

4. The web crawler will start scanning websites based on the configured settings.
- The crawler will analyze the web pages using regex patterns to identify copyright-related keywords.
- It will also perform OCR on images to check for potential copyrighted content.
- When infringement is detected, the crawler will flag the website and generate a report.

5. Monitor the crawler output and review the generated reports for potential copyright infringement.


## Winning solution of SIH 2022
### Problem Statement Code: NS1228
# Team:
#### Aryaman Raj
#### Astitwa Dwivedi
#### Ishita Srivastava
#### Anmol Bansal
#### Ashwinee Kumar Samdarshi
#### Sarthak Saxena
