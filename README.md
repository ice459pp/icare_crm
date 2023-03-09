
# Clinic Web Api



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [叫號](#)
    1. [診所叫號(初始)](#1-)
        * [成功](#i-example-request-)
        * [失敗](#ii-example-request-)
    1. [醫師診次叫號](#2-)
        * [成功](#i-example-request--1)
        * [失敗](#ii-example-request--1)
    1. [左側輪播](#3-)
        * [左側輪播](#i-example-request--2)
    1. [下方輪播](#4-)
        * [下方輪播](#i-example-request--3)
* [叫號控制](#)
    1. [叫號控制器-初始(需登入)](#1--)
        * [success](#i-example-request-success)
        * [error](#ii-example-request-error)
    1. [叫號控制-醫師(需登入)](#2--)
        * [success](#i-example-request-success-1)
        * [error](#ii-example-request-error-1)
    1. [叫號控制-下一號(需登入)](#3--)
        * [success](#i-example-request-success-2)
        * [error](#ii-example-request-error-2)
    1. [叫號控制-保留(需登入)](#4--)
        * [success](#i-example-request-success-3)
        * [error](#ii-example-request-error-3)
    1. [叫號控制-過號(需登入)](#5--)
        * [success](#i-example-request-success-4)
        * [error](#ii-example-request-error-4)
* [視訊](#)
    1. [視訊診療狀態](#1--1)
        * [success](#i-example-request-success-5)
        * [error](#ii-example-request-error-5)
    1. [視訊診療狀態更新](#2--1)
        * [success](#i-example-request-success-6)
        * [error](#ii-example-request-error-6)
* [預約](#)
    1. [預約日期查詢](#1--2)
        * [success](#i-example-request-success-7)
        * [error](#ii-example-request-error-7)
    1. [病患查詢](#2--2)
        * [success](#i-example-request-success-8)
        * [error](#ii-example-request-error-8)
    1. [預約刪除](#3--1)
        * [success](#i-example-request-success-9)
        * [error](#ii-example-request-error-9)
    1. [預約刪除(爽約)](#4--1)
        * [success](#i-example-request-success-10)
        * [error](#ii-example-request-error-10)
    1. [預約資訊](#5-)
        * [success](#i-example-request-success-11)
        * [error](#ii-example-request-error-11)
    1. [醫師門診](#6-)
        * [success](#i-example-request-success-12)
        * [error](#ii-example-request-error-12)
    1. [改約](#7-)
        * [success](#i-example-request-success-13)
        * [error](#ii-example-request-error-13)
    1. [追蹤完成/取消](#8-)
        * [success](#i-example-request-success-14)
        * [error](#ii-example-request-error-14)
* [Line Messaging Api](#line-messaging-api)
    1. [RichMenu](#1-richmenu)
    1. [Message](#2-message)
    1. [User](#3-user)
    1. [Bot](#4-bot)
    1. [webhook event(nodejs)](#5-webhook-eventnodejs)
        * [接收webhook event](#i-example-request-webhook-event)
* [CRM](#crm)
    1. [診所列表](#1--3)
        * [診所列表](#i-example-request--4)
    1. [診所資訊](#2--3)
        * [診所資訊](#i-example-request--5)
    1. [診所拜訪紀錄(列表)](#3--2)
        * [診所拜訪紀錄](#i-example-request--6)
    1. [新增編輯拜訪紀錄](#4--2)
        * [新增編輯拜訪紀錄](#i-example-request--7)
    1. [編輯基本資料](#5--1)
        * [編輯基本資料](#i-example-request--8)

--------



## 叫號



### 1. 診所叫號(初始)



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/ClinicsCallView/init
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | ZTlwMDJsQmhnRExtc0V2Y2MxanQ2dz09 |  |
| state | 2 |  |



***More example Requests/Responses:***


#### I. Example Request: 成功



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | e9p02lBhgDLmsEvcc1jt6w== |  |
| state | 2 |  |



***Body: None***



#### I. Example Response: 成功
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "doctor": [
            {
                "queue": [
                    {
                        "no": "1",
                        "name": "穗○武"
                    },
                    {
                        "no": "3",
                        "name": "測○人"
                    }
                ],
                "id": "49",
                "name": "王耀西",
                "now": "0",
                "pass": false,
                "patient": ""
            },
            {
                "queue": [],
                "id": "51",
                "name": "宋念宇",
                "now": "0",
                "pass": false,
                "patient": ""
            },
            {
                "queue": [],
                "id": "74",
                "name": "艾冠佳",
                "now": "0",
                "pass": false,
                "patient": ""
            },
            {
                "queue": [],
                "id": "324",
                "name": "抽血檢查",
                "now": "0",
                "pass": false,
                "patient": ""
            },
            {
                "queue": [],
                "id": "325",
                "name": "鏡檢檢查",
                "now": "0",
                "pass": false,
                "patient": ""
            },
            {
                "queue": [],
                "id": "3393",
                "name": "視訊診療",
                "now": "0",
                "pass": false,
                "patient": ""
            },
            {
                "queue": [],
                "id": "3394",
                "name": "test20200617001",
                "now": "0",
                "pass": false,
                "patient": ""
            }
        ],
        "id": "5124864001",
        "clinic": "愛管家綜合診所",
        "state": "午診"
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: 失敗



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | e9p02lBhgDLmsEvcc1jt6w== |  |
| state | 2 |  |



***Body: None***



#### II. Example Response: 失敗
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 2. 醫師診次叫號



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/ClinicsCallView/doctor
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | ZTlwMDJsQmhnRExtc0V2Y2MxanQ2dz09 |  |
| state | 2 |  |
| doctor | 49 |  |



***More example Requests/Responses:***


#### I. Example Request: 成功



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | e9p02lBhgDLmsEvcc1jt6w== |  |
| state | 1 |  |
| doctor | 49 |  |



***Body: None***



#### I. Example Response: 成功
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "queue": [
            {
                "no": "3",
                "name": "歪○仁"
            }
        ],
        "id": "49",
        "name": "王耀西",
        "now": "1",
        "pass": false,
        "patient": "穗○武"
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: 失敗



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | e9p02lBhgDLmsEvcc1jt6w== |  |
| state | 1 |  |
| doctor | 49 |  |



***Body: None***



#### II. Example Response: 失敗
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 3. 左側輪播



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/ClinicsCallView/banner
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | ZTlwMDJsQmhnRExtc0V2Y2MxanQ2dz09 |  |



***More example Requests/Responses:***


#### I. Example Request: 左側輪播



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | ZTlwMDJsQmhnRExtc0V2Y2MxanQ2dz09 |  |



***Body: None***



#### I. Example Response: 左側輪播
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": [
        {
            "id": "1",
            "title": "abc",
            "path": "http://localhost:8889/Banner/Calling/202206/5124864001/20220630034905553.gif",
            "type": "image",
            "open": true
        },
        {
            "id": "2",
            "title": "123",
            "path": "http://localhost:8889/Banner/Calling/202206/5124864001/20220630035057706.gif",
            "type": "image",
            "open": true
        },
        {
            "id": "3",
            "title": "aaa",
            "path": "http://localhost:8889/Banner/Calling/202206/5124864001/20220630035243033.gif",
            "type": "image",
            "open": true
        },
        {
            "id": "4",
            "title": "abc",
            "path": "http://localhost:8889/Banner/Calling/202206/5124864001/20220630035434482.gif",
            "type": "image",
            "open": true
        },
        {
            "id": "5",
            "title": "777777",
            "path": "http://localhost:8889/Banner/Calling/202206/5124864001/20220630053534145.png",
            "type": "image",
            "open": true
        },
        {
            "id": "6",
            "title": "video1",
            "path": "http://localhost:8889/Banner/Calling/202206/5124864001/20220630054732572.mp4",
            "type": "video",
            "open": true
        }
    ]
}
```


***Status Code:*** 0

<br>



### 4. 下方輪播



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/ClinicsCallView/marquee
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | ZTlwMDJsQmhnRExtc0V2Y2MxanQ2dz09 |  |



***More example Requests/Responses:***


#### I. Example Request: 下方輪播



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | ZTlwMDJsQmhnRExtc0V2Y2MxanQ2dz09 |  |



***Body: None***



#### I. Example Response: 下方輪播
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": [
        {
            "id": "5",
            "title": "【GMP藥廠合格檢驗公告】",
            "text": "在此向跟大家說明，本診所用藥都是經過GMP的合格檢驗和層層把關，皆使用安心藥材提供給大家服務，所以請各位朋友們放心，大家的身體健康是我們的職責，任何用藥絕對是以健康安全為第一！",
            "type": "calling",
            "open": true
        },
        {
            "id": "6",
            "title": "公告二",
            "text": "本院設有視訊診療，服務對象：居家隔離、居家檢疫、自主健康管理、一般門診病人、居家照護。",
            "type": "calling",
            "open": true
        },
        {
            "id": "7",
            "title": "小黃人：格魯的崛起",
            "text": "“扮演格魯，你的任務是成為最大，最糟糕的超級惡棍，要做到這一點，你需要收集小工具，僕從和你的勇氣來對抗惡毒6：一隊超級惡棍，他們對你試圖偷走他們的雷聲並不感到興奮。隨著你狡猾的計劃成形，你需要通過偷偷摸摸，賽車和以越來越狡猾的方式指揮你的僕從來填補你的惡棍，然後在火熱的最終對決中面對你的敵人。如果你認為你知道接下來會發生什麼，那麼請抓住你的等離子果凍發射器，朋友，因為你現在將以一種全新的方式面對Vicious 6！\r\n\r\n如果您認為這聽起來很有趣，請前往 Minecraft Marketplace 獲取DLC並開始您的職業生涯，成為世界上最可怕的惡棍。如果你真的很喜歡小黃人，但又不想購買這個新的資料片，你還將獲得一件免費的遊戲內小黃人連帽衫，在更衣室里等著你。",
            "type": "calling",
            "open": true
        }
    ]
}
```


***Status Code:*** 0

<br>



## 叫號控制



### 1. 叫號控制器-初始(需登入)



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/Calling/init
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/18 |  |
| state | 2 |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/16 |  |
| state | 2 |  |



***Body: None***



#### I. Example Response: success
```js
{
    "doctor": [
        {
            "queue": [
                {
                    "id": "174235",
                    "no": "7",
                    "name": "梅川依芙",
                    "keep": 0,
                    "pass": false,
                    "called": false
                },
                {
                    "id": "174233",
                    "no": "3",
                    "name": "John",
                    "keep": 1,
                    "pass": true,
                    "called": false
                },
                {
                    "id": "174234",
                    "no": "5",
                    "name": "莊茗",
                    "keep": 0,
                    "pass": true,
                    "called": false
                }
            ],
            "over": [
                {
                    "id": "174233",
                    "no": "3",
                    "name": "John",
                    "keep": 0,
                    "pass": false,
                    "called": true
                },
                {
                    "id": "174234",
                    "no": "5",
                    "name": "莊茗",
                    "keep": 0,
                    "pass": false,
                    "called": true
                }
            ],
            "id": "327",
            "name": "殷承影",
            "now": null,
            "pass": false,
            "patient": null,
            "nowUser": {
                "no": "7",
                "pass": false,
                "name": "梅川依芙"
            },
            "nextUser": {
                "no": "0",
                "pass": false,
                "name": ""
            }
        },
        {
            "queue": [],
            "over": [],
            "id": "331",
            "name": "姜尋",
            "now": null,
            "pass": false,
            "patient": null,
            "nowUser": {
                "no": "0",
                "pass": false,
                "name": ""
            },
            "nextUser": {
                "no": "0",
                "pass": false,
                "name": ""
            }
        },
        {
            "queue": [],
            "over": [],
            "id": "335",
            "name": "郭緣悅",
            "now": null,
            "pass": false,
            "patient": null,
            "nowUser": {
                "no": "0",
                "pass": false,
                "name": ""
            },
            "nextUser": {
                "no": "0",
                "pass": false,
                "name": ""
            }
        },
        {
            "queue": [],
            "over": [],
            "id": "2339",
            "name": "26",
            "now": null,
            "pass": false,
            "patient": null,
            "nowUser": {
                "no": "0",
                "pass": false,
                "name": ""
            },
            "nextUser": {
                "no": "0",
                "pass": false,
                "name": ""
            }
        },
        {
            "queue": [],
            "over": [],
            "id": "3339",
            "name": "健康總動員",
            "now": null,
            "pass": false,
            "patient": null,
            "nowUser": {
                "no": "0",
                "pass": false,
                "name": ""
            },
            "nextUser": {
                "no": "0",
                "pass": false,
                "name": ""
            }
        }
    ],
    "id": "zzz000",
    "clinic": "測試診所註冊",
    "state": "午診時段",
    "socket": null
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/16 |  |
| state | 2 |  |



***Body: None***



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 2. 叫號控制-醫師(需登入)



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/Calling/doctor
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/23 |  |
| state | 2 |  |
| doctor | 327 |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/16 |  |
| state | 2 |  |
| doctor | 327 |  |



***Body: None***



#### I. Example Response: success
```js
{
    "doctor": [
        {
            "queue": [
                {
                    "id": "174235",
                    "no": "7",
                    "name": "梅川依芙",
                    "keep": 0,
                    "pass": false,
                    "called": true
                },
                {
                    "id": "174233",
                    "no": "3",
                    "name": "John",
                    "keep": 1,
                    "pass": true,
                    "called": true
                },
                {
                    "id": "174234",
                    "no": "5",
                    "name": "莊茗",
                    "keep": 0,
                    "pass": true,
                    "called": true
                }
            ],
            "over": [
                {
                    "id": "174233",
                    "no": "3",
                    "name": "John",
                    "keep": 0,
                    "pass": false,
                    "called": true
                },
                {
                    "id": "174234",
                    "no": "5",
                    "name": "莊茗",
                    "keep": 0,
                    "pass": false,
                    "called": true
                }
            ],
            "id": "327",
            "name": "殷承影",
            "now": null,
            "pass": false,
            "patient": null,
            "nowUser": {
                "no": "7",
                "pass": false,
                "name": "梅川依芙"
            },
            "nextUser": {
                "no": "0",
                "pass": false,
                "name": ""
            }
        }
    ],
    "id": "zzz000",
    "clinic": "測試診所註冊",
    "state": "午診時段",
    "socket": null
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/16 |  |
| state | 2 |  |
| doctor | 327 |  |



***Body: None***



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 3. 叫號控制-下一號(需登入)



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/Calling/next
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/23 |  |
| state | 2 |  |
| doctor | 327 |  |
| clinic | cjlDY2l1QjRQZHdvMjBOZlBiNGsvUT09 |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/22 |  |
| state | 2 |  |
| dr | 327 |  |



#### I. Example Response: success
```js
{
    "doctor": [
        {
            "queue": [
                {
                    "id": "174235",
                    "no": "7",
                    "name": "梅川依芙",
                    "keep": 0,
                    "pass": true,
                    "called": false
                },
                {
                    "id": "174233",
                    "no": "3",
                    "name": "John",
                    "keep": 1,
                    "pass": true,
                    "called": false
                },
                {
                    "id": "174234",
                    "no": "5",
                    "name": "莊茗",
                    "keep": 0,
                    "pass": true,
                    "called": false
                }
            ],
            "over": [
                {
                    "id": "174233",
                    "no": "3",
                    "name": "John",
                    "keep": 0,
                    "pass": false,
                    "called": true
                },
                {
                    "id": "174234",
                    "no": "5",
                    "name": "莊茗",
                    "keep": 0,
                    "pass": false,
                    "called": true
                },
                {
                    "id": "174233",
                    "no": "3",
                    "name": "John",
                    "keep": 0,
                    "pass": false,
                    "called": true
                },
                {
                    "id": "174235",
                    "no": "7",
                    "name": "梅川依芙",
                    "keep": 0,
                    "pass": false,
                    "called": true
                }
            ],
            "id": "327",
            "name": "殷承影",
            "now": null,
            "pass": false,
            "patient": null,
            "nowUser": {
                "no": "7",
                "pass": true,
                "name": "梅川依芙"
            },
            "nextUser": {
                "no": "0",
                "pass": false,
                "name": ""
            }
        }
    ],
    "id": "zzz000",
    "clinic": "測試診所註冊",
    "state": "午診時段",
    "socket": {
        "action": "on-queue-call-number",
        "extra": {
            "clinic": {
                "id": "zzz000",
                "text": "測試診所註冊"
            },
            "date": null,
            "doctor": {
                "id": "327",
                "text": "殷承影"
            },
            "interval": null,
            "time": 2,
            "user": {
                "id": "PA2021090004",
                "text": "梅川依芙"
            },
            "nowNo": "7",
            "nextNo": "0",
            "department": {
                "id": "00",
                "text": "不分科"
            },
            "nowUser": {
                "user": {
                    "id": "PA2021090004",
                    "text": "梅川依芙"
                },
                "nowNo": "7"
            },
            "nextUser": null
        },
        "from": "",
        "to": "zzz000-327"
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/08/22 |  |
| state | 2 |  |
| dr | 327 |  |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 4. 叫號控制-保留(需登入)



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/Calling/keep
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 174233 |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 174233 |  |



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "doctor": [
            {
                "queue": [
                    {
                        "id": "174275",
                        "no": "15",
                        "name": "卓一帆",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174262",
                        "no": "11",
                        "name": "諾克西亞",
                        "keep": 2,
                        "pass": false,
                        "called": false
                    },
                    {
                        "id": "174258",
                        "no": "3",
                        "name": "趙娜非",
                        "keep": 0,
                        "pass": true,
                        "called": true
                    },
                    {
                        "id": "174259",
                        "no": "5",
                        "name": "王大和",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174260",
                        "no": "7",
                        "name": "梅川依芙",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174261",
                        "no": "9",
                        "name": "李阿仁",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174274",
                        "no": "13",
                        "name": "李阿仁",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    }
                ],
                "over": [
                    {
                        "id": "174258",
                        "no": "3",
                        "name": "趙娜非",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    }
                ],
                "id": "327",
                "name": "殷承影",
                "now": null,
                "pass": false,
                "patient": null,
                "nowUser": {
                    "no": "15",
                    "pass": false,
                    "name": "卓一帆"
                },
                "nextUser": {
                    "no": "0",
                    "pass": false,
                    "name": ""
                }
            }
        ],
        "id": "zzz000",
        "clinic": "測試診所註冊",
        "state": "午診時段",
        "socket": {
            "action": "queue",
            "extra": null,
            "from": "",
            "to": "zzz000"
        }
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 174233 |  |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 5. 叫號控制-過號(需登入)



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/Calling/pass
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 174233 |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 174233 |  |



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "doctor": [
            {
                "queue": [
                    {
                        "id": "174275",
                        "no": "15",
                        "name": "卓一帆",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174262",
                        "no": "11",
                        "name": "諾克西亞",
                        "keep": 2,
                        "pass": false,
                        "called": false
                    },
                    {
                        "id": "174258",
                        "no": "3",
                        "name": "趙娜非",
                        "keep": 0,
                        "pass": true,
                        "called": true
                    },
                    {
                        "id": "174259",
                        "no": "5",
                        "name": "王大和",
                        "keep": 0,
                        "pass": true,
                        "called": true
                    },
                    {
                        "id": "174260",
                        "no": "7",
                        "name": "梅川依芙",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174261",
                        "no": "9",
                        "name": "李阿仁",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174274",
                        "no": "13",
                        "name": "李阿仁",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    }
                ],
                "over": [
                    {
                        "id": "174258",
                        "no": "3",
                        "name": "趙娜非",
                        "keep": 0,
                        "pass": false,
                        "called": true
                    },
                    {
                        "id": "174259",
                        "no": "5",
                        "name": "王大和",
                        "keep": 0,
                        "pass": false,
                        "called": false
                    }
                ],
                "id": "327",
                "name": "殷承影",
                "now": null,
                "pass": false,
                "patient": null,
                "nowUser": {
                    "no": "15",
                    "pass": false,
                    "name": "卓一帆"
                },
                "nextUser": {
                    "no": "5",
                    "pass": true,
                    "name": "王大和"
                }
            }
        ],
        "id": "zzz000",
        "clinic": "測試診所註冊",
        "state": "午診時段",
        "socket": {
            "action": "queue",
            "extra": null,
            "from": "",
            "to": "zzz000"
        }
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 174233 |  |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



## 視訊



### 1. 視訊診療狀態



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/remote/info
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| room | {{room}} |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| room | {{room}} |  |



***Body: None***



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "room": "room-1664444014-335-174823",
        "expiried": "1664422200",
        "msg": "",
        "status": "C"
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| room | {{room}} |  |



***Body: None***



#### II. Example Response: error
```js
{
    "status": false,
    "error": "error msg",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 2. 視訊診療狀態更新



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/remote/room/update
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | sjlV7xGqiYQuHaZyrdPESSmM5GDR2zVM2U%2FXN%2FYv1qQ%3D |  |
| action | confirm | overdue(過期), return(我回來了), confirm(取消預約) |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | sjlV7xGqiYQuHaZyrdPESSmM5GDR2zVM2U%2FXN%2FYv1qQ%3D |  |
| action | confirm | overdue(過期), return(我回來了), confirm(取消預約) |



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "id": "zzz000-335",
        "room": "room-1664444014-335-174823",
        "action": "confirm",
        "msg": "您已取消看診，如需看診請重新掛號。",
        "status": "N"
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | sjlV7xGqiYQuHaZyrdPESSmM5GDR2zVM2U%2FXN%2FYv1qQ%3D |  |
| action | confirm | overdue(過期), return(我回來了), confirm(取消預約) |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "error msg",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



## 預約



### 1. 預約日期查詢



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/reserve/date
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| datetime | 2022/12/01 | search date |
| doctorId | 331 | 醫師代號 |
| patientId |  | 病患身分證(option) |
| range | 3 | 3(default),5,7查詢日期範圍,3即是向後查詢3天, (options) |
| state | 0 | 0:全, 1:早, 2:午, 3:晚 |
| action | next | next:下一頁, prev:上一頁, ' ':初始 |



***More example Requests/Responses:***


#### I. Example Request: success



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| datetime | 2022-11-28 |  |
| doctorId | xxx |  |
| patientId | xxx |  |
| range | 3 | 顯示天數
 |
| state | 0 | 0:全, 1:早, 2:午, 3:晚 |
| action |  | next:下一頁, prev:上一頁, ' ':初始 |



***Body: None***



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "date": [
            {
                "year": "2022",
                "date": "12/02",
                "week": "週五"
            },
            {
                "year": "2022",
                "date": "12/03",
                "week": "週六"
            },
            {
                "year": "2022",
                "date": "12/05",
                "week": "週一"
            }
        ],
        "interval": [
            {
                "day": [
                    {
                        "tag": [
                            {
                                "id": "1525",
                                "name": "高血壓",
                                "type": "2",
                                "track": ""
                            }
                        ],
                        "track": [],
                        "id": "271154",
                        "name": "王大和",
                        "identity": "K122156077",
                        "phone": "0963235408",
                        "note": "",
                        "date": "12/02",
                        "callno": "1",
                        "medicine": ""
                    },
                    {
                        "tag": [
                            {
                                "id": "1525",
                                "name": "高血壓",
                                "type": "2",
                                "track": ""
                            }
                        ],
                        "track": [],
                        "id": "271155",
                        "name": "王大和",
                        "identity": "K122156077",
                        "phone": "0963235408",
                        "note": "",
                        "date": "12/03",
                        "callno": "2",
                        "medicine": ""
                    },
                    {
                        "tag": [
                            {
                                "id": "1532",
                                "name": "腸胃不適",
                                "type": "1",
                                "track": ""
                            },
                            {
                                "id": "1525",
                                "name": "高血壓",
                                "type": "2",
                                "track": ""
                            }
                        ],
                        "track": [
                            {
                                "id": "3681",
                                "name": "8天追蹤",
                                "type": "3",
                                "track": "TK20221205000001"
                            }
                        ],
                        "id": "271156",
                        "name": "王大和",
                        "identity": "K122156077",
                        "phone": "0963235408",
                        "note": "",
                        "date": "12/05",
                        "callno": "2",
                        "medicine": "高血壓3次"
                    }
                ],
                "text": "午",
                "time": "2"
            }
        ]
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body: None***



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": []
}
```


***Status Code:*** 0

<br>



### 2. 病患查詢



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/Patients/Search
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| keyword |  |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| keyword |  |  |



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": [
        {
            "normal": [],
            "tags": [],
            "id": "PA2021090006",
            "number": "",
            "name": "一二三",
            "vid": null,
            "birth": "",
            "tel": "",
            "phone": "0912345678",
            "age": "",
            "bail": "0",
            "ageyear": "",
            "toothscaling": "",
            "toothwashed": "",
            "remark": "",
            "push": true,
            "sms": true,
            "call": true,
            "foregin": true,
            "card": null,
            "np": null,
            "regexist": 0,
            "app": 0,
            "black": false
        },
        {
            "normal": [],
            "tags": [],
            "id": "TT202104090001",
            "number": "",
            "name": "東新Jr",
            "vid": null,
            "birth": "079/04/10",
            "tel": "02-741258963",
            "phone": "0987456123",
            "age": "32",
            "bail": "0",
            "ageyear": "32",
            "toothscaling": "",
            "toothwashed": "",
            "remark": "",
            "push": true,
            "sms": true,
            "call": true,
            "foregin": true,
            "card": null,
            "np": null,
            "regexist": 0,
            "app": 0,
            "black": false
        }
    ]
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| keyword |  |  |



***Status Code:*** 0

<br>



### 3. 預約刪除



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/Calling/del
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  | 預約編號 |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  | 預約編號 |



#### I. Example Response: success
```js
{
  "status": true,
  "error": "",
  "httpStatus": 200,
  "data": "271163"
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  | 預約編號 |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 4. 預約刪除(爽約)



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/Calling/bail
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



#### I. Example Response: success
```js
{
  "status": true,
  "error": "",
  "httpStatus": 200,
  "data": "271163"
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 5. 預約資訊



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/reserve/info/271161
```



***More example Requests/Responses:***


#### I. Example Request: success



***Body: None***



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "tag": [],
        "normal": [
            {
                "id": "1525",
                "name": "高血壓",
                "type": "2",
                "track": ""
            }
        ],
        "track": [],
        "regular": [
            {
                "id": "13217",
                "name": "P1409",
                "type": "regular",
                "track": ""
            }
        ],
        "exptrack": [
            {
                "id": "13217",
                "name": "P1408",
                "type": "regular",
                "track": null
            }
        ],
        "id": "271161",
        "date": "2022/12/10",
        "state": "2",
        "doctor": "327",
        "name": "王大和",
        "identity": "K122156077",
        "birth": "0760111",
        "phone": "0963235408",
        "note": ""
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body: None***



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 6. 醫師門診



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/ApptOpt/doctor
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/12/19 |  |
| state | 2 |  |
| doctorId | 327 |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/12/19 |  |
| state | 2 |  |
| doctorId | 327 |  |



#### I. Example Response: success
```js
{
  "time": [
    {
      "date": "2022-12-19",
      "interval": "14:00-15:00",
      "people": "0",
      "visit": true
    },
    {
      "date": "2022-12-19",
      "interval": "15:00-16:00",
      "people": "0",
      "visit": true
    },
    {
      "date": "2022-12-19",
      "interval": "16:00-17:00",
      "people": "0",
      "visit": true
    }
  ],
  "mode": "2",
  "date": "12/19"
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022/12/19 |  |
| state | 2 |  |
| doctorId | 327 |  |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 7. 改約



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/reserve/renew
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022-12-20 |  |
| interval | 14:30-17:00 |  |
| state | 2 |  |
| doctor | 327 |  |
| patient | K122156077 |  |
| note | 測試改約 |  |
| tags | 1526 |  |
| track |  |  |
| p14 |  |  |
| p16 |  |  |
| p42 |  |  |
| p43 |  |  |
| id | 271165 |  |
| normal | 1530 |  |
| normal | 1525 |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022-12-20 |  |
| interval | 14:30-17:00 |  |
| state | 2 |  |
| doctor | 327 |  |
| patient | K122156077 |  |
| note | 測試改約 |  |
| tags | 1526 |  |
| track |  |  |
| p14 |  |  |
| p16 |  |  |
| p42 |  |  |
| p43 |  |  |
| id | 271165 |  |
| normal | 1530 |  |
| normal | 1525 |  |



#### I. Example Response: success
```js
{
    "status": true,
    "error": "",
    "httpStatus": 200,
    "data": {
        "id": "271166",
        "survey": "0",
        "msg": "341406",
        "sent": true,
        "patient": "SzEyMjE1NjA3Nw==",
        "y": "2022",
        "realtimemsg": null,
        "room": "zzz000-327",
        "socket": {
            "action": "on-queue-new-reserve",
            "extra": {
                "clinic": {
                    "id": "zzz000",
                    "text": "測試診所註冊"
                },
                "date": "2022-12-20",
                "doctor": {
                    "id": "327",
                    "text": "殷承影"
                },
                "interval": "14:30-17:00",
                "time": 2,
                "user": {
                    "id": "K122156077",
                    "text": "王大和"
                },
                "nowNo": null,
                "nextNo": null,
                "department": null,
                "nowUser": null,
                "nextUser": null
            },
            "from": "",
            "to": "zzz000-327"
        }
    }
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| date | 2022-12-20 |  |
| interval | 14:30-17:00 |  |
| state | 2 |  |
| doctor | 327 |  |
| patient | K122156077 |  |
| note | 測試改約 |  |
| tags | 1526 |  |
| track |  |  |
| p14 |  |  |
| p16 |  |  |
| p42 |  |  |
| p43 |  |  |
| id | 271165 |  |
| normal | 1530 |  |
| normal | 1525 |  |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



### 8. 追蹤完成/取消



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/Track/del
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |
| type |  |  |
| action |  |  |



***More example Requests/Responses:***


#### I. Example Request: success



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |
| type |  |  |
| action |  |  |



#### I. Example Response: success
```js
{
  "tags": [
    {
      "id": "TRx20221205000001",
      "type": "medicine",
      "name": null,
      "expired": false,
      "sort": null
    }
  ],
  "id": null,
  "patient": "K122156077",
  "name": null,
  "sex": null,
  "cbirth": null,
  "tel": null,
  "mobile": null,
  "fire": 0,
  "sms": false,
  "call": false,
  "y": null,
  "lastnotify": null,
  "regexist": 0,
  "app": 0,
  "lastcheckin": false,
  "lastregdate": null
}
```


***Status Code:*** 0

<br>



#### II. Example Request: error



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |
| type |  |  |
| action |  |  |



#### II. Example Response: error
```js
{
    "status": false,
    "error": "error msg",
    "httpStatus": 403,
    "data": null
}
```


***Status Code:*** 0

<br>



## Line Messaging Api



### 1. RichMenu



***Endpoint:***

```bash
Method: 
Type: 
URL: 
```



### 2. Message



***Endpoint:***

```bash
Method: 
Type: 
URL: 
```



### 3. User



***Endpoint:***

```bash
Method: 
Type: 
URL: 
```



### 4. Bot



***Endpoint:***

```bash
Method: 
Type: 
URL: 
```



### 5. webhook event(nodejs)



***Endpoint:***

```bash
Method: POST
Type: 
URL: {{line-webhook}}/webhook
```



***More example Requests/Responses:***


#### I. Example Request: 接收webhook event



***Body: None***



#### I. Example Response: 接收webhook event
```js
{
   "type":"message",
   "message":{
      "type":"text",
      "id":"17239890475737",
      "text":"d"
   },
   "webhookEventId":"01GKG1A7TFAWAJYE3BQGCFE54R",
   "deliveryContext":{
      "isRedelivery":false
   },
   "timestamp":1670206791149,
   "source":{
      "type":"user",
      "userId":"U1e31d259dfd0b274b8061c5aaafd58c8"
   },
   "replyToken":"7453654b503c422cad1ac64834ecc9a3",
   "mode":"active"
}
```


***Status Code:*** 0

<br>



## CRM



### 1. 診所列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/clinic/list/1
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxxxxxxx | 使用者ID
 |
| filter_city | 台北市 | 台北市，不分城市會帶空值 |
| filter_district | 內湖區 | 如果城市是不分城市，這裡會直接是空值 |
| filter_name | 瑞光路4段18號6-6 | 如果城市是不分城市，這裡會直接是空值 |
| filter_datetime | reverse | 日期排序normal/reverse |



***More example Requests/Responses:***


#### I. Example Request: 診所列表



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxxxxxxx |  |
| filter_city | 台北市 |  |
| filter_district | 內湖區 |  |
| filter_name | 瑞光路4段18號6-6 |  |
| filter_datetime | reverse |  |



***Body: None***



#### I. Example Response: 診所列表
```js
{
    "status": true,
    "error": "",
    "code": 200,
    "data": [
        {
            "id": "c1",
            "name": "xx診所",
            "addr": {
                "city": "台北市",
                "district": "大安區",
                "road": "瑞光路4段18號5-5"
            },
            "phone": "0912345678",
            "visitor": {
                "id": "qqda6262620",
                "name": "XXX"
            },
            "visit_datetime": "2023/03/01 10:30"
        },
        {
            "id": "c2",
            "name": "xx診所",
            "addr": {
                "city": "台北市",
                "district": "大安區",
                "road": "瑞光路4段18號5-5"
            },
            "phone": "0912345678",
            "visitor": {
                "id": "qqda6262620",
                "name": "XXX"
            },
            "visit_datetime": "2023/03/01 10:30"
        }
    ]
}
```


***Status Code:*** 0

<br>



### 2. 診所資訊



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/clinic/info/
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxxx | User token使用者令牌 |
| clinic | 7478412 | 診所ID |



***More example Requests/Responses:***


#### I. Example Request: 診所資訊



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxxx |  |
| clinic | 7478412 |  |



***Body: None***



#### I. Example Response: 診所資訊
```js
{
    "status": true,
    "error": "",
    "code": 200,
    "data": {
        "id": "c1",
        "name": "cxxx診所",
        "phone": "0921231434",
        "addr": {
            "city": "台北市",
            "district": "大安區",
            "road": "瑞光路4段18號5-5"
        },
        "his": 1, // 1耀聖
        "isUse_video": false,
        "isDecided": false, //醫師能否做主
        "people": 3, //醫師人數
        "call_number_way": "線上叫號",
        "isVisit_datetime": "", // 可否預約拜訪時間
        "care_group": "",
        "experience": "",
        "join_group": [ //有無加入照護網
        "慢性病","BC肝","慢性腎臟病"
        ]
    }
}
```


***Status Code:*** 0

<br>



### 3. 診所拜訪紀錄(列表)



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/visit/log/list/1
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxxx | User token使用者令牌 |
| clinic | 5125165 | 診所id |



***More example Requests/Responses:***


#### I. Example Request: 診所拜訪紀錄



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxxx |  |
| clinic | 5125165 |  |



***Body: None***



#### I. Example Response: 診所拜訪紀錄
```js
{
    "status": true,
    "error": "",
    "code": 200,
    "data": [
        {
            "id": "fgretlgwrlg",
            "visitor": {
                "id": "dsasdfsdf",
                "name": "阿民"
            },
            "content": "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
            "status": "教育訓練",
            "visit_datetime": "2023/03/06 9:30",
            "now_datetime": "2023/03/06 9:30",
            "isApproval": false
        },
        {
            "id": "fgretlgwrlg",
            "visitor": {
                "id": "dsasdfsdf",
                "name": "阿民"
            },
            "content": "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
            "status": "教育訓練",
            "visit_datetime": "2023/03/06 9:30",
            "now_datetime": "2023/03/06 9:30",
            "isApproval": false
        }
    ]
}
```


***Status Code:*** 0

<br>



### 4. 新增編輯拜訪紀錄



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/visit/log/action
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxx | 使用者ID |
| status | 1 | 1: 初始 2: 回訪 3: 教育訓練 |
| visit_datetime | 2023/03/02 09:30 | 拜訪時間 |
| description | "紀錄記錄紀錄" | 先強制輸入 |
| id | 1235698 | 不用強制，空值就是新增，有值就是編輯 |
| action | edit | edit/add |



***More example Requests/Responses:***


#### I. Example Request: 新增編輯拜訪紀錄



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| token | xxx |  |
| status | 1 |  |
| visit_datetime | 2023/03/02 09:30 |  |
| description | "紀錄記錄紀錄" |  |
| id | 1235698 |  |
| action | edit |  |



#### I. Example Response: 新增編輯拜訪紀錄
```js
{
    "status": true,
    "error": "",
    "code": 200,
    "data": null
}
```


***Status Code:*** 0

<br>



### 5. 編輯基本資料



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/clinic/info/edit/
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1235698 | 機構代碼 |
| token | xxx | 使用者ID |
| name | XXX診所 | 診所名稱 |
| phone | 0912345678 | 診所電話 |
| addr | ["台北市","內湖區","陽光街321巷"] | 診所地址 |
| his | 1 | his系統, 1:展望 2:耀聖 3:其他 |
| isUse_video | true | 有無視訊，預設是false |
| isDecided | true | 醫師有無自主權 |
| people | 5 | 醫師人數 |
| call_number_way | "線上叫號" | 叫號方式(字串) |
| isVisit_datetime | "5:00~6:00" | 給null就是否，其餘皆是可預約(可以給空字串) |
| care_group | 臺大醫院 | 醫療群 |
| experience | "前台大外科主任" | 其他醫師執業 |
| join_group | ["慢性病","慢性腎臟病","BC肝"] | 有無加入照護網 |



***More example Requests/Responses:***


#### I. Example Request: 編輯基本資料



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1235698 |  |
| token | xxx |  |
| name | XXX診所 |  |
| phone | 0912345678 |  |
| addr | ["台北市","內湖區","陽光街321巷"] |  |
| his | 1 |  |
| isUse_video | true |  |
| isDecided | true |  |
| people | 5 |  |
| call_number_way | "線上叫號" |  |
| isVisit_datetime | "5:00~6:00" |  |
| care_group | 臺大醫院 |  |
| experience | "前台大外科主任" |  |
| join_group | ["慢性病","慢性腎臟病","BC肝"] |  |



#### I. Example Response: 編輯基本資料
```js
{
    "status": true,
    "error": "",
    "code": 200,
    "data": null
}
```


***Status Code:*** 0

<br>



---
[Back to top](#clinic-web-api)

>Generated at 2023-03-09 16:43:12 by [docgen](https://github.com/thedevsaddam/docgen)
