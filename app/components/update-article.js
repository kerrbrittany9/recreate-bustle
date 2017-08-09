import Ember from 'ember';

export default Ember.Component.extend({
  isArticleShowing: false,
  updateArticleForm: false,
  actions: {
    articleShow: function() {
      this.set('isArticleShowing', true);
    },
    articleHide: function() {
      this.set('isArticleShowing', false);
    },
    update(article, params) {
      this.sendAction('update', article, params);
    },
    delete(article) {
    if (confirm('Are you sure you want to delete this article?')) {
      this.sendAction('destroyArticle', article);
    }
  }
}
});
