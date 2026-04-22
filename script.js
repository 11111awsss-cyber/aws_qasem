function showComparison(){
document.getElementById("content").innerHTML=`
<button onclick="hideAll()">إخفاء</button>

<table>
<tr><th>العنصر</th><th>الذكاء الاصطناعي</th><th>الأنظمة التقليدية</th></tr>

<tr>
<td>التعريف</td>
<td>أنظمة تعتمد على التعلم من البيانات وتحليلها لاتخاذ قرارات ذكية</td>
<td>أنظمة تعتمد على أوامر مبرمجة مسبقًا فقط</td>
</tr>

<tr>
<td>التعلم</td>
<td>يتعلم ويتطور مع مرور الوقت</td>
<td>لا يتعلم</td>
</tr>

<tr>
<td>المرونة</td>
<td>مرن وقابل للتكيف مع التغيرات</td>
<td>محدود وثابت</td>
</tr>

<tr>
<td>الأداء</td>
<td>يتحسن ويصبح أدق مع الاستخدام</td>
<td>يبقى كما هو بدون تطور</td>
</tr>

</table>`;
}

function showEnd(){
document.getElementById("content").innerHTML=`
<button onclick="hideAll()">إخفاء</button>

<h2>✨ الختام ✨</h2>
<p>كان معكم الطالب اوس ابو زيتون، وقد كان الموضوع واضح وسهل الفهم.</p>
<p><b>برمجة الطالب: اوس ابو زيتون</b></p>
`;
}

function hideAll(){
document.getElementById("content").innerHTML="";
}
