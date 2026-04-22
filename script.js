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

<tr>
<td>الاستخدامات</td>
<td>الطب، السيارات الذكية، التطبيقات الحديثة، تحليل البيانات</td>
<td>البرامج البسيطة والأنظمة الإدارية</td>
</tr>

<tr>
<td>المستقبل</td>
<td>يمثل مستقبل التكنولوجيا</td>
<td>أقل تطورًا</td>
</tr>

</table>`;
}

function showEvidence(){
document.getElementById("content").innerHTML=`
<button onclick="hideAll()">إخفاء</button>
<h2>📸 الأدلة</h2>

<p>يمكنك تعديل الصور من الكود (استبدل الروابط بالصور التي تريدها)</p>

<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Artificial_intelligence.jpg">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Flowchart.png">

<p>الصورة الأولى تمثل الذكاء الاصطناعي، والثانية تمثل الأنظمة التقليدية.</p>
`;
}

function hideAll(){
document.getElementById("content").innerHTML="";
}
