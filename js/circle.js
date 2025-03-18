/**
 * サークル紹介ページのための機能
 */
document.addEventListener('DOMContentLoaded', function() {
    // サークルカードのホバーエフェクト強化
    const circleCards = document.querySelectorAll('.circle-card');
    
    circleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 12px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // サークル情報のモーダル表示機能(将来的な拡張用)
    const cardLinks = document.querySelectorAll('.card-img-link');
    
    cardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const circleId = this.closest('.circle-card').dataset.circleId;
            // 将来的にここでモーダル表示などの処理を追加
            console.log(`サークルID: ${circleId} がクリックされました`);
        });
    });

    // サークル検索と絞り込み機能(将来的な実装用)
    // TODO: 必要に応じてサークル検索機能の実装
});

/**
 * サークルカード用のスタイル拡張
 * CSSと合わせた動的な効果を提供
 */
window.addEventListener('load', function() {
    // カード配置の調整（将来的なレイアウト調整機能用）
    const resizeCards = function() {
        const cards = document.querySelectorAll('.circle-card');
        // レイアウト調整コード
    };
    
    // ウィンドウサイズ変更時のレイアウト調整
    window.addEventListener('resize', resizeCards);
    
    // 初期レイアウト調整
    resizeCards();
});
