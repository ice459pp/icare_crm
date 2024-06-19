
## CRM



### 1. 登入



***Endpoint:***

```bash

Method: POST
Type: FORMDATA
URL: {{domain}}/login
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| useID | dijfidfogsj@sprinf.com |  |
| password | oaskdofscas626565 |  |



***More example Requests/Responses:***


#### I. Example Request: 登入



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| useID | dijfidfogsj@sprinf.com |  |
| password | oaskdofscas626565 |  |



#### I. Example Response: 登入
```js
{
    "status": true,
    "error": "",
    "code": 200,
    "data": null
}
```

<br>



### 2. 診所列表



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{domain}}/clinic/list/1
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| filter_city | 台北市 | 台北市，不分城市會帶空值 |
| filter_district | 內湖區 | 如果城市是不分城市，這裡會直接是空值 |
| filter_name | 瑞光路4段18號6-6 | 如果城市是不分城市，這裡會直接是空值 |
| filter_datetime | reverse | 日期排序normal/reverse |



***More example Requests/Responses:***


#### I. Example Request: 診所列表



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| filter_city | 台北市 | 台北市，不分城市會帶空值 |
| filter_district | 內湖區 | 如果城市是不分城市，這裡會直接是空值 |
| filter_name | 瑞光路4段18號6-6 | 如果城市是不分城市，這裡會直接是空值 |
| filter_datetime | reverse | 日期排序normal/reverse |



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
            "name": "cxxx診所",
            "phone": "0921231434",
            "addr": {
                "city": "台北市",
                "district": "大安區",
                "road": "瑞光路4段18號5-5"
            },
            "visitor":{
                "id":"dfasdfasdf",
                "name":"阿民"
            },
            "visit_datetime":"2023/2/25"
        },        {
            "id": "c1",
            "name": "cxxx診所",
            "phone": "0921231434",
            "addr": {
                "city": "台北市",
                "district": "大安區",
                "road": "瑞光路4段18號5-5"
            },
            "visitor":{
                "id":"dfasdfasdf",
                "name":"阿民"
            },
            "visit_datetime":"2023/2/25"
        }
    ]
}
```


<br>



### 3. 診所資訊



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


<br>



### 4. 診所拜訪紀錄(列表)



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


<br>



### 5. 新增編輯拜訪紀錄



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{domain}}/visit/log/action
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
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


<br>



### 6. 編輯基本資料



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
| name | XXX診所 | 診所名稱 |
| phone | 0912345678 | 診所電話 |
| addr | ["台北市","內湖區","陽光街321巷"] | 診所地址 |
| his | 1 | his系統, 1:展望 2:耀聖 3:其他 |
| isUse_video | true | 有無視訊，預設是false |
| isDecided | true | 醫師有無自主權 |
| people | 5 | 醫師人數，預設是1 |
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


<br>

---
