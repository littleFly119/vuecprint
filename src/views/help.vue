<template>
  <div class=" help_container fs16 color_theme">
    <h3>● 云打印</h3>
    <p>第一步：提交打印任务——在浏览器中输入云打印地址，点击“云打印”，使用学工号及校园卡密码登陆，
      上传需要打印的文档，设置打印选项（A4/A4，黑白/彩色等）
    </p>
    <p>第二步：找到附近的自助文印终端，点击“打印”，并刷校园卡（刷卡时请停留2秒，待读卡成功后再移走校园卡）</p>
    <p>第三步：确认打印任务，再次刷校园卡</p>
    <p>第四步：打印完成，取走文件</p>
    <br>
    <br>
    <a class="btn" download="UniOpmClient_Setup.exe" href="./UniOpmClient_Setup.exe">下载打印驱动</a>

    <h3>● 打印</h3>
    <p>第一步：在个人电脑中安装打印驱动—在浏览器中输入云打印地址，下载打印驱动并安装</p>
    <p>第二步：打开个人电脑中需要打印的文件，点击打印，选择打印机名称“打印管理系统”，设置打印选项（A4/A4，黑白/彩色等），
      点击“确定”，弹出登录对话框后使用学工号及校园卡密码登录</p>
    <p>第三步：找到附近的自助打印终端，点击“打印”，并刷校园卡（刷卡时请停留2秒，待读卡成功后再移走校园卡）</p>
    <p>第四步：确认打印任务，再次刷校园卡</p>
    <p>第五步：打印完成，取走文件</p>
    <h3>● 复印</h3>
    <p>第一步：找到附近的自助文印终端，点击“复印”，并刷校园卡（刷卡时请停留2秒，待读卡成功后再移走校园卡）</p>
    <p>第二步：将需要复印的文件放入复印托盘或扫描屏上</p>
    <p>第三步：设置复印选项（A4/A4，黑白/彩色等），输入需要复印的数量</p>
    <p>第四步：点击“开始”</p>
    <p>第五步：再次刷校园卡，结束复印</p>


    <h3>● 扫描</h3>
    <p>第一步：找到附近的自助文印终端，点击“扫描”，并刷校园卡（刷卡时请停留2秒，待读卡成功后再移走校园卡）</p>
    <p>第二步：将需要扫描的文件放入扫描屏上</p>
    <p>第三步：在打印机上选择“Scan to PC”，点击“0001 SCAN”，按下“开始”按钮</p>
    <p>第四步：再次刷校园卡，结束扫描</p>
    <p>第五步：在个人电脑中打开浏览器输入云打印地址, 点击“扫描文档”, 使用学工号及校园卡密码登陆，即可查看扫描文档</p>

  </div>
</template>

<script>
  export default {
    name: "help"
  }
</script>

<style scoped>
  .help_container h3 {
    font-weight: bold;
  }

  .help_container .btn {
    display: inline-block;
    padding: 0 25px;
    height: 32px;
    background-image: linear-gradient(-88deg, #16bfff 0%, #3666f0 100%), linear-gradient(#4e98d9, #4e98d9);
    background-blend-mode: normal, normal;
    border-radius: 16px;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 32px;
    margin-left: 25px;
    background-color: #3666f0;
    text-decoration: none;
  }
</style>
