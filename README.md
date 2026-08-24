# Hi, I'm Samuel 👋

🏭 **Manufacturing Engineer — Fiber Optics** | 🤖 **Learning Automation & Robotics** | 💹 **Quant / Simulation Hobbyist**

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![OpenCV](https://img.shields.io/badge/-OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![LAMMPS](https://img.shields.io/badge/-LAMMPS-2C2D72?style=flat-square&logo=atom&logoColor=white)
![OpenMC](https://img.shields.io/badge/-OpenMC-009688?style=flat-square&logo=atom&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![OpenAI](https://img.shields.io/badge/-OpenAI-412991?style=flat-square&logo=openai&logoColor=white)

> By day I'm a manufacturing engineer in fiber optics — process capability, yield, splice loss, and the data that explains all three. I'm working my way toward automation and robotics: machine vision, motion control, and taking the repetitive parts of a production line off of human hands. Everything else here is me learning in public, mostly through simulation, ML, and markets.

---

## 🏭 Day Job & Where I'm Headed

Fiber optic manufacturing: process development and characterization, measurement systems, and pulling the factory's data into something that can actually be acted on. Most of my work-adjacent code is about closing the loop between the line and the analysis — splice loss estimation, response tracking, data collection off equipment.

What I'm actively learning:

- 🦾 **Robotics & motion** — kinematics, path planning, and getting a controller to do something useful on a real fixture
- 👁️ **Machine vision for inspection** — OpenCV and YOLO-style detectors applied to defects and part presence rather than chart patterns
- ⚙️ **Industrial automation** — PLCs, sensors, and the data plumbing between the floor and the database
- 📊 **Manufacturing analytics** — SPC, DOE, and making process data legible

---

## 🚀 Projects

### Automation, Vision & Manufacturing

- 👁️ **[computer-vision-scraper-yolov4](https://github.com/Slamwise/computer-vision-scraper-yolov4)** — YOLOv4 object detection pipeline. My first real dive into training and running a detector end to end, which is the same toolkit I want pointed at inspection problems.

- 🏭 **aiEngineer** *(private)* — Full-stack manufacturing cost estimation platform. Describe a project in plain language → multi-agent AI routes it through Mechanical, Electrical, Materials, and Process specialist engineers → consolidated Bill of Materials + cost breakdown. React 18 + TypeScript + Radix UI + Tailwind frontend, Express + Drizzle ORM + PostgreSQL backend, OpenAI orchestration.

### Science & Simulation

- 🔬 **[MaterialDiscovery](https://github.com/Slamwise/MaterialDiscovery)** — Autonomous materials discovery platform that uses Bayesian optimization + MACE graph neural network potentials + Green-Kubo molecular dynamics to find novel ultra-high temperature ceramics for aerospace and fusion reactors. Searches the Hf-Zr-Ta-C-N composition space, pre-screens with CHGNet stability prediction, and evaluates elastic modulus and thermal conductivity entirely in silico. Zero-file-I/O LAMMPS engine on H100 GPU. ![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)

- ☢️ **[nuclear-projects](https://github.com/Slamwise/nuclear-projects)** — Monte Carlo neutron transport simulation of a TRISO-fueled high-temperature gas-cooled reactor. Models spherical fuel kernels with 4 containment layers → cylindrical pin cells with ~3,400 particles → hexagonal fuel assemblies → full 3-ring core. Built on OpenMC with criticality (k-effective) analysis. ![Status](https://img.shields.io/badge/status-in%20progress-yellow?style=flat-square)

### Quantitative Finance & Trading

- 📉 **[Trading-Strategies](https://github.com/Slamwise/Trading-Strategies)** — Research notebooks and scripts for systematic strategies: EMA trend following, anchored VWAP, session-open and dividend-capture setups, seasonality studies, and an LSTM on COT data, plus a small backtesting engine to evaluate them. ![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)

- 📊 **[Backtesting](https://github.com/Slamwise/Backtesting)** — Strategy backtesting engine paired with YOLOv8 computer vision for detecting chart patterns (head-and-shoulders, wedges, flags) directly from candlestick images and live video streams. Real-time BTC analysis via Kraken WebSocket, interactive Plotly visualizations, SQLite persistence. PyTorch + OpenCV + ultralytics. ![Status](https://img.shields.io/badge/status-prototype-blue?style=flat-square)

- 📈 **[Trading-Pattern-Detection](https://github.com/Slamwise/Trading-Pattern-Detection)** — Automated stock screener + algorithmic pattern detector connected to Interactive Brokers TWS. Screens ~60 symbols by fundamentals, then scans for H-patterns and 30-minute pivot breakouts across multiple timeframes. Threaded async IBKR event handling, SQLite signal logging. ![Status](https://img.shields.io/badge/status-prototype-blue?style=flat-square)

---

## What I'm Working On

- 🦾 **Getting hands-on with robotics** — working through motion control and kinematics with the goal of automating real fiber optic process steps
- 🔎 **Vision for inspection** — retargeting the detector work from charts to parts and defects
- 🧪 **Expanding the materials search** — adding new element palettes and multi-fidelity Bayesian optimization to MaterialDiscovery
- ⚛️ **Finishing the reactor core** — resolving hexagonal lattice indexing for the full-core OpenMC simulation

---

<details>
<summary>🎲 Random Facts</summary>

- Spend my day on glass thin enough to lose light in and my nights on simulations
- Believe the best way to learn something is to build it badly first
- Coffee-powered, terminal-native

</details>
