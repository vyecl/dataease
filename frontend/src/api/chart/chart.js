import request from '@/utils/request'

export function post(url, data) {
  return request({
    url: url,
    method: 'post',
    loading: true,
    data
  })
}

export function getChartTree(data) {
  return request({
    url: 'api',
    method: 'post',
    loading: true,
    data
  })
}

export function chartCopy(id, panelId) {
  return request({
    url: '/chart/view/chartCopy/' + id + '/' + panelId,
    method: 'post',
    loading: false
  })
}
export function chartGroupTree(data) {
  return request({
    url: '/chart/group/tree',
    method: 'post',
    loading: false,
    data
  })
}

export function searchAdviceSceneId(panelId) {
  return request({
    url: '/chart/view/searchAdviceSceneId/' + panelId,
    method: 'get',
    loading: true
  })
}

export function checkSameDataSet(viewIdSource, viewIdTarget) {
  return request({
    url: '/chart/view/checkSameDataSet/' + viewIdSource + '/' + viewIdTarget,
    method: 'get',
    loading: false
  })
}

export function ajaxGetDataOnly(id, panelId, data) {
  return request({
    url: '/chart/view/getData/' + id + '/' + panelId,
    method: 'post',
    loading: true,
    hideMsg: true,
    data
  })
}

export function pluginTypes() {
  return request({
    url: '/plugin/view/types',
    method: 'post'
  })
}

export function deleteCircle(id) {
  return request({
    url: '/chart/group/deleteCircle/' + id,
    method: 'post',
    loading: true
  })
}

