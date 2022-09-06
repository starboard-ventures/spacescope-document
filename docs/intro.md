---
sidebar_position: 1
slug: /
---

# Overview

## Introduction
**SpaceScope’s API Documentation** empowers software developers, researchers, and analysts to tap into SpaceScope’s open global data, available real-time and historically.

See how SpaceScope’s API can be used in a dashboard [here](https://dashboard.starboard.ventures/). By following our guides and documentation, developers will be able to integrate our APIs easily into their pre-existing or new platforms.

Visit our [ObservableHQ website](https://observablehq.com/@starboard/starboard-filecoin-data-index) to understand how quickly you can create and deploy your own notebook using our API, and access our guide and documentation to get started.

## Endpoint Overview
The SpaceScope API is divided into several categories: **`Network Core`**, **`Value Flow`**, **`System Actor`**, **`User-Defined Actor`**, and **`Raw Data`**. 

**`Network Core`** is now available, and contains 4 sections: 


| **Endpoint Category**                    | **Description**                                                                                                                                                                                         |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| /v1/network_core/*                    | Endpoints that return data providing an overview of the Filecoin Network.                                                                                                                       |
| /v1/network_core/capacity-services/*  | Endpoints that return data on storage capacity and storage service on the Filecoin Network storage capacity, under the category of Network Core. |
| /v1/network_core/market-deals/*       | Endpoints that return data on market demands, storage deals and daily deals on the Filecoin Network, under the category of Network Core.                                                           |
| /v1/network_core/transactions-usage/* | Endpoints that return data relating to network usage, transactions and network gas fees on the Filecoin Network, under the category of Network Core.                                              |
| /v1/network_core/circulating-supply/* | Endpoints that return data of circulating supply on the Filecoin Network, under the category of Network Core.                                                                                     |
