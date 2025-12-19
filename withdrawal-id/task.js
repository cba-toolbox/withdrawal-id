// ID生成とデータへの追加
const participant_id = jsPsych.randomization.randomID(8);

// 終了画面の呈示
var end_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return `
        <div style="text-align: center; margin-top: 50px;">
        <h2>研究にご協力いただき、誠にありがとうございました。</h2>
        <hr style="width: 50%; margin: 20px auto;">
        <p>あなたの<strong>同意撤回用ID</strong>は以下の通りです。</p>
        <p style="font-size: 32px; font-weight: bold; color: #2c3e50; background-color: #ecf0f1; display: inline-block; padding: 10px 20px; border-radius: 5px;">
        ${participant_id}
        </p>
        <p style="text-align: left; width: 85%; margin: 20px auto; font-size: 14px;">
        今後、研究参加への同意を撤回されたい場合は、研究者までこのIDをお知らせください。<br>
        このIDをメモに控えた後、<strong>以下の「終了」をクリックして終了ください</strong>。
        </p>
        </div>
        `;},
     choices: ['終了'],
     data: {withdrawal_id: participant_id}
};

// タイムライン(フルスクリーンは毎回必要)
const timeline = [fullscreen, end_screen];