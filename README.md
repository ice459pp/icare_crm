
# Clinic Web Api



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

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

>Generated at 2023-03-09 16:54:24 by [docgen](https://github.com/thedevsaddam/docgen)
